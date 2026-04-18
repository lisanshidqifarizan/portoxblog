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
			url: `${baseUrl}/login`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/register`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/disclaimer`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/profile`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/tags`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/portfolio/`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/portfolio/about`,
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
