// lib/getPostsForSitemap.ts
import { connectDB } from "@/lib/connectDB";
import Posts from "./models/Posts";

export async function getPostsForSitemap() {
	await connectDB();

	const posts = await Posts.find().select("slug updatedAt").lean();

	return posts;
}
