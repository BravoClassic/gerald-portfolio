import { getPrismicClient } from "@/lib/prismic";
import { SectionTitle } from "@/components/SectionTitle";
import { notFound } from "next/navigation";

interface Params {
  params: { slug: string };
}

export default async function BlogPost({ params }: Params) {
  const client = getPrismicClient();
  const post = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-10 space-y-6">
      <SectionTitle>{post.data?.title}</SectionTitle>
      {post.data?.content && (
        <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.data.content }} />
      )}
    </div>
  );
}
