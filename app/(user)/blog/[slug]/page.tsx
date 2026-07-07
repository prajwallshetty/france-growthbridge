import React from "react";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/actions/cms";
import BlogClient from "@/components/BlogClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug).catch(() => null);

  if (!blog) {
    return {
      title: "Article Not Found | Growth Bridge",
      description: "The requested blog article was not found.",
    };
  }

  const desc = blog.seoDescription || blog.subtitle || "Field notes and engineering insights from the Growth Bridge team.";
  const title = `${blog.seoTitle || blog.title} | Growth Bridge`;
  const imageUrl = blog.image || "/opengraph-image.png";

  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug).catch(() => null);

  if (!blog) {
    notFound();
  }

  return <BlogClient blog={blog} />;
}
