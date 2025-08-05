import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/60">
      <div className="container flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Gerald. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="mailto:gerald@example.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://github.com" aria-label="GitHub" target="_blank">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
