import * as prismic from "@prismicio/client";

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPO_NAME || "";

export function getPrismicClient(config: prismic.ClientConfig = {}) {
  const endpoint = prismic.getEndpoint(repositoryName);
  return prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  });
}
