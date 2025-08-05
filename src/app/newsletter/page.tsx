import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NewsletterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="container py-10"
    >
      <SectionTitle>Newsletter</SectionTitle>
      <form className="max-w-md space-y-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-md border bg-background p-2"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </motion.div>
  );
}
