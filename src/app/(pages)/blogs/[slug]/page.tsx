"use client";

import NewBlogDetail from "@/components/NewBlogDetail/NewBlogDetail";
import { use } from "react";

export default function NewSubBlogs({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params); // ✅ unwraps the async params
  return <NewBlogDetail slug={decodeURIComponent(slug)} />;
}
