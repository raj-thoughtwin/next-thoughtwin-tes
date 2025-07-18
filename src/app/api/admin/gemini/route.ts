import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
interface BlogInput {
  id?: number;
  title?: string;
  prefix: string;
  term: string;
  make: string;
  isManual?: boolean;
}
export async function POST(req: Request) {
  const requestBody: BlogInput = await req.json();
  const { id, title, prefix, term, make } = requestBody;

  if (!prefix || !term || !make) {
    return NextResponse.json({ error: "prefix, term, and make are required." }, { status: 400 });
  }

  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set in environment variables.");
    return NextResponse.json({ error: "Server configuration error: API key missing." }, { status: 500 });
  }

  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const prompt = `Generate a high-quality blog post for the IT service company "Thoughtwin", which builds scalable ${prefix} applications using ${make} technologies for the ${term} domain.

The blog should be structured with the following clearly labeled and well-developed sections:

1. Introduction: The Real-World Need for ${prefix} ${term}
   - Describe the current business landscape or challenges in the ${term} domain.
   - Explain why companies need ${prefix} solutions and how they create value.

2. Why ${make} Is The Ideal Technology for ${prefix}
   - Highlight core advantages of ${make} (e.g., scalability, speed, ecosystem, community).
   - Justify why this tech is well-suited for building ${prefix} applications.

3. Our Approach at Thoughtwin
   - Provide a dedicated section titled "Our Approach at Thoughtwin".
   - Clearly outline Thoughtwin’s agile delivery model and engineering practices.
   - Include specific mentions of MVP-first development, CI/CD pipelines, cross-functional teams, and user-centric design.
   - Explain how Thoughtwin uses ${make} technologies to accelerate time-to-market while ensuring scalability and maintainability.

4. Feature Highlights for ${prefix} ${term}
   - Provide exactly 5 to 6 key features.
   - Each feature should be clearly listed and explained in 1–2 sentences.
   - Tailor these features specifically to the common needs and challenges in the ${term} industry.
   - Format the features as a **bullet point list** or **numbered list**, ensuring clarity and consistency.

5. Case Study
   - Include a real-world case study in four clearly labeled sub-sections:
     • **Objective**: The client's goals and what they aimed to achieve by working with Thoughtwin.
     • **Challenges**: Specific problems or bottlenecks the client faced in the ${term} domain.
     • **Solution**: How Thoughtwin used ${make} to architect and implement the ${prefix} solution.
     • **Results**: Key outcomes — including KPIs, performance improvements, and client feedback.
   - Write the case study as a narrative (not bullet points), using each label as a heading.

6. FAQ Section
   - Include a dedicated FAQ section.
   - Provide clear and informative answers to the following common questions:
     • What is a ${prefix} ${term} solution?
     • Why is ${make} the right technology for it?
     • How long does it typically take to build?
     • How does Thoughtwin ensure quality and timely delivery?

Tone: Professional and consultative  
Target Audience: CTOs, founders, product managers, and tech leads  
Format: Each section must have a title followed by a well-structured response (100–150 words per section)

At the end, include:
"Estimated Reading Time: X minutes"
(Based on an average reading speed of 200 words per minute)`;

  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2000, // Increased token limit for more comprehensive blog posts
    },
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    const json = await response.json();
    const generatedText = json?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return NextResponse.json({ error: "Gemini did not return content." }, { status: 500 });
    }
    const getSection = (text: string, sectionNumber: number) => {
      const regex = new RegExp(
        `\\*\\*${sectionNumber}\\. .*?\\*\\*\\s*\\n+([\\s\\S]*?)(?=\\*\\*${sectionNumber + 1}\\. |\\*\\*${sectionNumber + 1}\\.\\s|Estimated Reading Time:)`,
        "i"
      );
      const match = text.match(regex);
      return match?.[1]?.trim() ?? null;
    };
    const extractFAQSection = (text: string): string | null => {
      const match =
        text.match(/(\*\*6\. FAQ Section\*\*[\s\S]*?)\n*\*\*Estimated Reading Time/i) ||
        text.match(/(\*\*FAQ Section\*\*[\s\S]*?)\n*\*\*Estimated Reading Time/i) ||
        text.match(/(\* \*\*What is.*?)(?=\n*Estimated Reading Time|$)/is);
      return match?.[1]?.trim() ?? null;
    };

    const readingTimeMatch = generatedText.match(/Estimated Reading Time: (\d+)\s*minutes?/i);
    const estimatedReadingTime = readingTimeMatch ? parseInt(readingTimeMatch[1]) : null;

    const blogContent = {
      introduction: getSection(generatedText, 1),
      technologyJustification: getSection(generatedText, 2),
      thoughtwinApproach: getSection(generatedText, 3),
      featureHighlights: getSection(generatedText, 4),
      caseStudy: getSection(generatedText, 5),
      faq: extractFAQSection(generatedText),
    };

    const parseFeatureHighlights = (text: string): string[] => {
      const featurePart = text.split(":")[1] || text; // Extract after colon if exists
      return featurePart
        .replace(/\*\*/g, "")
        .split(/[\n,••*]+/)
        .map((f) => f.replace(/\.$/, "").trim())
        .filter(Boolean);
    };

    const parseFaq = (text: string): { question: string; answer: string }[] => {
      const regex = /\* \*\*(.+?)\*\*\s+(.+?)(?=\n\* \*\*|$)/gs;
      const faqs: { question: string; answer: string }[] = [];
      let match;
      while ((match = regex.exec(text)) !== null) {
        faqs.push({
          question: match[1].trim(),
          answer: match[2].trim(),
        });
      }
      return faqs;
    };
    
    let blog;
    if (id) {
      blog = await prisma.blog.update({
        where: { id },
        data: {
          title,
          prefix,
          term,
          make,
          isManual: false,
          isApprove: false,
          introduction: blogContent.introduction,
          technologyJustification: blogContent.technologyJustification,
          thoughtwinApproach: blogContent.thoughtwinApproach,
          featureHighlights: parseFeatureHighlights(blogContent.featureHighlights || ""),
          caseStudy: blogContent.caseStudy?.replace(/\*\*/g, ""),
          faq: parseFaq(blogContent.faq || ""),
          estimatedReadingTime: estimatedReadingTime,
        },
      });
    } else {
      blog = {
        title: `${prefix} ${term} solutions using ${make} | Thoughtwin`,
        slug: `${prefix} ${term} solutions using ${make} | Thoughtwin`
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, ""),
        isManual: true,
        prefix,
        term,
        make,
        introduction: blogContent.introduction,
        technologyJustification: blogContent.technologyJustification,
        thoughtwinApproach: blogContent.thoughtwinApproach,
        featureHighlights: parseFeatureHighlights(blogContent.featureHighlights || ""),
        caseStudy: blogContent.caseStudy,
        faq: parseFaq(blogContent.faq || ""),
        estimatedReadingTime,
      };
    }

    return NextResponse.json({ success: true, blog }, { status: 200 });
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
