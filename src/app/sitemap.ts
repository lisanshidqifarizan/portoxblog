import { MetadataRoute } from "next";
import { getPostsForSitemap } from "@/lib/getPostsForSitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://veoveneht.eu.org";
	const posts = await getPostsForSitemap();

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/portfolio/projects`,
			lastModified: new Date(),
		},

		...posts.map((post) => ({
			url: `${baseUrl}/${post.slug}`,
			title: `${baseUrl}/${post.title}`,
			lastModified: new Date(post.updatedAt),
		})),
	];
}
