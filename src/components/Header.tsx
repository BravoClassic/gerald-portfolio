"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b bg-background/60 backdrop-blur"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Gerald
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
