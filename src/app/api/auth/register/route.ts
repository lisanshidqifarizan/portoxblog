import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/connectDB";
import Users from "@/lib/models/Users";

export async function POST(req: Request) {
	try {
		const { name, username, email, password } = await req.json();

		await connectDB();
		const userExist = await Users.findOne({ email });
		if (userExist) {
			// email sudah dipakai
			return NextResponse.json(
				{ message: "Email already exist!" },
				{ status: 409 }
			);
		}
		const usernameExist = await Users.findOne({ username });
		if (usernameExist) {
			return NextResponse.json(
				{ message: "Username already exist!" },
				{ status: 409 }
			);
		}

		const saltRounds = 10;
		const hashPassword = await bcrypt.hash(password, saltRounds);

		const saveUser = new Users({
			name,
			username,
			email,
			password: hashPassword,
		});
		await saveUser.save();

		return NextResponse.json(
			{ message: "Success created an account!" },
			{ status: 201 }
		);
	} catch (e) {
		const eMsg = e instanceof Error ? `Failed to signup: ${e.message}` : e;
		return NextResponse.json({ message: eMsg }, { status: 500 });
	}
}
