import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import makeData from "../public/assets/json/prefixTermMake.json";
import { Make } from "../src/types/types";

const prisma = new PrismaClient();

async function createAdmin() {
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: "admin@thoughtwin.com" },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("thoughtwin_777", 10);
    await prisma.admin.create({
      data: {
        email: "admin@thoughtwin.com",
        password: hashedPassword,
        role: "admin",
      },
    });
    console.log("Admin user created");
  } else {
    console.log("Admin user already exists");
  }
}

async function createBlogs() {
  const totalImages = 843;
  let count = 0;

  const AllMakes: Make[] = makeData as Make[];

  for (const make of AllMakes) {
    const imageIndex = (count % totalImages) + 1;
    const imageName = `${imageIndex}.jpg`;

    const title = `${make.Prefix} ${make.Term} solutions using ${make.Make} | Thoughtwin`;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Check if the slug already exists to avoid unique constraint violation
    const existingBlog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!existingBlog) {
       const randomLikes = Math.floor(Math.random() * 101);
      await prisma.blog.create({
        data: {
          title,
          slug,
          prefix: make.Prefix,
          term: make.Term,
          make: make.Make,
          isManual: false,
          imageName,
          likes: randomLikes,
        },
      });
      console.log(`Blog created: ${title}`);
    } else {
      console.log(`Blog with slug "${slug}" already exists.`);
    }

    count++;
  }
}

async function main() {
  // Create Admin and Blogs sequentially
  await createAdmin();
  await createBlogs();  // Creates the blog data after admin
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


// async function updateBlogLikes() {
//   const blogs = await prisma.blog.findMany();

//   for (const blog of blogs) {
//     const randomLikes = Math.floor(Math.random() * 101); // 0 to 100
//     await prisma.blog.update({
//       where: { id: blog.id },
//       data: { likes: randomLikes },
//     });
//   }

//   console.log("✅ Blog likes updated successfully!");
//   await prisma.$disconnect();
// }

// updateBlogLikes().catch((e) => {
//   console.error(e);
//   prisma.$disconnect();
// });