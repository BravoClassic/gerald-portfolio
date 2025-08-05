import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogPreview } from "@/components/BlogPreview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getProjects, getBlogPosts } from "@/lib/content";
import { motion } from "framer-motion";

export default async function Home() {
  const [projects, posts] = await Promise.all([getProjects(), getBlogPosts()]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 py-10"
    >
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Hi, I’m Gerald — I build creative, well-engineered solutions to
          complex problems.
        </h1>
        <div className="flex justify-center gap-4">
          <Button asChild><Link href="/resume">View Resume</Link></Button>
          <Button variant="outline" asChild><Link href="/projects">Projects</Link></Button>
          <Button variant="outline" asChild><Link href="/blog">Blog</Link></Button>
        </div>
      </section>

      <section className="container mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={{
                id: p.id,
                title: p.data?.title || "Untitled",
                summary: p.data?.summary || "",
                image: p.data?.image?.url || "",
                slug: p.uid || "",
              }}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto">
        <SectionTitle>Latest Articles</SectionTitle>
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
      </section>
    </motion.div>
  );
}
