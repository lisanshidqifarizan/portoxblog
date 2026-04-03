import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Users from "@/lib/models/Users";
import { connectDB } from "@/lib/connectDB";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
	try {
		const { email, password } = await req.json();
		if (!email || !password)
			return NextResponse.json(
				{ message: "Required all fields!" },
				{ status: 400 },
			);

		await connectDB();
		const userExist = await Users.findOne({ email });
		if (!userExist)
			return NextResponse.json({ message: "User not found!" }, { status: 404 });

		const isMatch = await bcrypt.compare(password, userExist.password);
		if (!isMatch)
			return NextResponse.json(
				{ message: "Invalid credentials!" },
				{ status: 401 },
			);

		const payload = {
			id: userExist._id.toString(),
			name: userExist.name,
			username: userExist.username,
			email: userExist.email,
			role: userExist.role,
		};
		const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

		const res = NextResponse.json(
			{ message: "Signin success!" },
			{ status: 200 },
		);
		res.cookies.set("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 1 * 60 * 60,
		});
		return res;
	} catch (e) {
		const eMsg = e instanceof Error ? `Failed to sign in: ${e.message}` : e;
		return NextResponse.json({ message: eMsg }, { status: 500 });
	}
}
