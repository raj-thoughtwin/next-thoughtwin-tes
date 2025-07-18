import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      isManual,
      prefix,
      term,
      make,
      introduction,
      technologyJustification,
      thoughtwinApproach,
      featureHighlights,
      caseStudy,
      faq,
      estimatedReadingTime,
    } = body;
    const randomImageNumber = Math.floor(Math.random() * 800) + 1;
       const randomLikes = Math.floor(Math.random() * 101);
    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        isManual: isManual || false,
        prefix: prefix || "",
        term: term || "",
        make: make || "",
        introduction: introduction || "",
        technologyJustification: technologyJustification || "",
        thoughtwinApproach: thoughtwinApproach || "",
        featureHighlights: featureHighlights || "",
        caseStudy: caseStudy || "",
        faq: faq || [],
        estimatedReadingTime: estimatedReadingTime || 0,
        imageName: `blog-${randomImageNumber}.jpg`,
        likes: randomLikes,
      },
    });
    return NextResponse.json({ message: "Blog saved", blog }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get("limit");
    const excludeSlug = searchParams.get("excludeSlug");
    const random = searchParams.get("random") === "true";
    const slug = searchParams.get("slug");

    // ✅ If slug is present, return single blog
    if (slug) {
      const blog = await prisma.blog.findUnique({ where: { slug } });
      return NextResponse.json(blog, { status: 200 });
    }

    // ✅ Else fetch list of blogs
    let blogs = await prisma.blog.findMany({
      where: excludeSlug
        ? {
            slug: {
              not: excludeSlug,
            },
          }
        : undefined,
    });

    if (random) {
      blogs = blogs.sort(() => 0.5 - Math.random());
    }

    const limit = limitParam ? parseInt(limitParam) : blogs.length;
    const limitedBlogs = blogs.slice(0, limit);

    return NextResponse.json(limitedBlogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, description, likes } = body;

    if (!id) {
      return NextResponse.json({ message: "Missing required ID" }, { status: 400 });
    }

    const updatedEmailData = await prisma.blog.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(likes !== undefined && { likes }), // add this line to update likes
      },
    });

    return NextResponse.json({ message: "Blog updated successfully", updatedEmailData }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
