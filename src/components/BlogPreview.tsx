import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function BlogPreview({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        <p className="text-xs text-muted-foreground">{post.date}</p>
        <Link href={`/blog/${post.slug}`} className="text-sm text-primary underline">
          Read post
        </Link>
      </CardContent>
    </Card>
  );
}
