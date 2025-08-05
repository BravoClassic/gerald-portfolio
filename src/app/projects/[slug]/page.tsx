import { getPrismicClient } from "@/lib/prismic";
import { SectionTitle } from "@/components/SectionTitle";
import { notFound } from "next/navigation";

interface Params {
  params: { slug: string };
}

export default async function ProjectDetail({ params }: Params) {
  const client = getPrismicClient();
  const project = await client
    .getByUID("project", params.slug)
    .catch(() => null);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-10 space-y-6">
      <SectionTitle>{project.data?.title}</SectionTitle>
      {project.data?.summary && (
        <p className="text-muted-foreground max-w-2xl">
          {project.data.summary}
        </p>
      )}
      {project.data?.content && (
        <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: project.data.content }} />
      )}
    </div>
  );
}
