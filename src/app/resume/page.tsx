import { ResumeSection } from "@/components/ResumeSection";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="container py-10"
    >
      <SectionTitle>Resume</SectionTitle>
      <ResumeSection title="Experience">
        <div>
          <h4 className="font-medium">Company Name</h4>
          <p className="text-sm text-muted-foreground">Role — 2023–Present</p>
          <p className="text-sm">
            Brief description of responsibilities and achievements.
          </p>
        </div>
      </ResumeSection>
      <ResumeSection title="Skills">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.js</li>
          <li>Data Visualization</li>
        </ul>
      </ResumeSection>
      <ResumeSection title="Education">
        <div>
          <h4 className="font-medium">University Name</h4>
          <p className="text-sm text-muted-foreground">
            B.S. in Something, 2020
          </p>
        </div>
      </ResumeSection>
    </motion.div>
  );
}
