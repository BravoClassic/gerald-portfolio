import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="container py-10"
    >
      <SectionTitle>About Me</SectionTitle>
      <p className="max-w-2xl text-muted-foreground">
        I’m Gerald, a developer and artist fascinated by the intersection of
        creativity and technology. This portfolio showcases my projects,
        writing, and professional experience.
      </p>
    </motion.div>
  );
}
