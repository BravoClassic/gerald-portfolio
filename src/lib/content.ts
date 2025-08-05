import { getPrismicClient } from "@/lib/prismic";

export async function getProjects() {
  try {
    const client = getPrismicClient();
    const projects = await client.getAllByType("project", { pageSize: 3 });
    return projects;
  } catch {
    return [] as unknown[];
  }
}

export async function getBlogPosts() {
  try {
    const client = getPrismicClient();
    const posts = await client.getAllByType("blog_post", { pageSize: 3 });
    return posts;
  } catch {
    return [] as unknown[];
  }
}
