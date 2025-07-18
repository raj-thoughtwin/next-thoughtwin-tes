import NewBlogs from "../../../containers/NewBlogs/index";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function NewBlogsPage() {
  const blogsData = await prisma.blog.findMany(
    {orderBy: {
    id: 'asc',
  },}
  );
  const mappedBlogsData = blogsData.map(blog => ({
    ...blog,
    imageName: blog.imageName ?? "",
  }));

  return (
    <div>
      <NewBlogs blogsData={blogsData as any}/>
    </div>
  );
}
