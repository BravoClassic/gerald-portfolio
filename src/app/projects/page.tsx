import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";
import { motion } from "framer-motion";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="container py-10"
    >
      <SectionTitle>Projects</SectionTitle>
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
    </motion.div>
  );
}
