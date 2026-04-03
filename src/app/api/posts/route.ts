import { NextResponse } from "next/server";

import { connectDB } from "@/lib/connectDB";
import models from "@/lib/models";
const { Posts, Users } = models;

export async function GET(req: Request) {
	try {
		await connectDB();
		const { searchParams } = new URL(req.url);
		const postId = searchParams.get("id");
		const postTag = searchParams.get("tag");
		if (postId) {
			const post = await Posts.findById(postId).lean();
			if (!post)
				return NextResponse.json(
					{ message: "Post not found" },
					{ status: 404 }
				);
			return NextResponse.json(post, { status: 200 });
		}
		if (postTag) {
			const tag = await Posts.find({ tags: { $in: [postTag] } }).lean();
			if (!tag)
				return NextResponse.json(
					{ message: "Post by tag not found!" },
					{ status: 404 }
				);
			return NextResponse.json(tag, { status: 200 });
		}

		const posts = await Posts.find()
			.populate("author", "username")
			.sort({ createdAt: -1 })
			.lean();

		return NextResponse.json(
			{ posts, message: "Fetch posts succes!" },
			{ status: 200 }
		);
	} catch (err) {
		console.error(
			err instanceof Error ? `Error during fetch: ${err.message}` : err
		);
		return NextResponse.json(
			{ message: "Error during fetch:", err },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	try {
		const { author, title, content, slug, images, category, tags } =
			await req.json();

		// Validasi input
		if (
			!author ||
			!title ||
			!content ||
			!slug ||
			!images ||
			!category ||
			!tags
		) {
			return NextResponse.json(
				{ message: "All Fields are required" },
				{ status: 400 }
			);
		}

		await connectDB();

		const newPost = new Posts({
			author,
			title,
			content,
			slug,
			images,
			category,
			tags,
		});

		await newPost.save();

		return NextResponse.json(
			{ message: "Successfully add post" },
			{ status: 201 }
		);
	} catch (err) {}
}

export async function PUT(req: Request) {
	try {
		await connectDB();

		const { searchParams } = new URL(req.url);
		const postId = searchParams.get("id");

		if (!postId)
			return NextResponse.json(
				{ message: "Post ID is required" },
				{ status: 400 }
			);

		const updatedData = await req.json();
		const updatedPost = await Posts.findByIdAndUpdate(postId, updatedData, {
			new: true,
			runValidators: true,
		});

		if (!updatedPost)
			return NextResponse.json({ message: "Post not found" }, { status: 404 });

		return NextResponse.json(
			{ message: "Post updated successfully", post: updatedPost },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "Failed to update post",
				error: error instanceof Error ? error.message : error,
			},
			{ status: 500 }
		);
	}
}

export async function DELETE(req: Request) {
	try {
		await connectDB();

		const { searchParams } = new URL(req.url);
		const postId = searchParams.get("id"); // Ambil ID dari query params

		if (!postId) {
			return NextResponse.json(
				{ message: "Post ID is required" },
				{ status: 400 }
			);
		}

		const deletedPost = await Posts.findByIdAndDelete(postId);

		if (!deletedPost) {
			return NextResponse.json({ message: "Post not found" }, { status: 404 });
		}

		return NextResponse.json(
			{ message: "Post deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error deleting post:", error);
		return NextResponse.json(
			{
				message: "Failed to delete post",
				error: error instanceof Error ? error.message : error,
			},
			{ status: 500 }
		);
	}
}
