import { SectionTitle } from "@/components/SectionTitle";
import { BlogPreview } from "@/components/BlogPreview";
import { getBlogPosts } from "@/lib/content";
import { motion } from "framer-motion";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="container py-10"
    >
      <SectionTitle>Blog</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPreview
            key={post.id}
            post={{
              id: post.id,
              title: post.data?.title || "Untitled",
              excerpt: post.data?.excerpt || "",
              date: post.first_publication_date || "",
              slug: post.uid || "",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
