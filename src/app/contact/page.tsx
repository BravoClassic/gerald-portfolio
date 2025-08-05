import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="container py-10"
    >
      <SectionTitle>Contact</SectionTitle>
      <form className="max-w-xl space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full rounded-md border bg-background p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md border bg-background p-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full rounded-md border bg-background p-2 h-32"
        />
        <Button type="submit">Send</Button>
      </form>
    </motion.div>
  );
}
