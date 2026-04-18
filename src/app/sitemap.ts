import { MetadataRoute } from "next";
import { getPosts } from "@/lib/api";
import { typesPosts } from "@/lib/types";

async function getAllPosts(): Promise<{ slug: string; updatedAt: Date }[]> {
	const data: typesPosts[] = await getPosts();

	return data.map((post) => ({
		slug: post.slug,
		title: post.title,
		updatedAt: new Date(post.updatedAt),
	}));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://veoveneht.eu.org";
	const posts = await getAllPosts();

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
			lastModified: post.updatedAt,
		})),
	];
}
