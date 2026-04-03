import { NextResponse } from "next/server";
import Comments from "@/lib/models/Comments";
import { connectDB } from "@/lib/connectDB";

export async function POST(req: Request) {
    try {
        const { postId, userId, content, likes } = await req.json();
        if (!postId || !userId || !content) return NextResponse.json({ message: "Invalid postId, userId or content!" }, { status: 404 });

        await connectDB();

        const saveComments = new Comments({ postId, userId, content, likes });
        await saveComments.save();

        return NextResponse.json({ message: "Success created a comment" }, { status: 201 });
    } catch (e) {
        const eMsg = e instanceof Error ? `Failed to post a comment: ${e.message}` : e;
        return NextResponse.json({ message: eMsg }, { status: 500 });
    }
}