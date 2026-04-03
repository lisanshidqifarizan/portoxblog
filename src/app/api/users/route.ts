import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import User from "@/lib/models/Users";

export async function GET() {
    try {
        await connectDB();

        const users = await User.find().select("-password").lean();

        return NextResponse.json({ users, message: "Success GET users" }, { status: 200 });
    } catch (err) {
        console.error(err instanceof Error ? `Error GET users: ${err.message}` : err);
        return NextResponse.json({ message: "Something went wrong! :(" }, { status: 500 });
    }
}