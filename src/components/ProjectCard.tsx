import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  slug: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="h-48 w-full object-cover"
          />
        )}
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <CardTitle>{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
        <Link href={`/projects/${project.slug}`} className="text-sm text-primary underline">
          Read more
        </Link>
      </CardContent>
    </Card>
  );
}
