import { NextResponse, NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import Users from '@/lib/models/Users';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized!' }, { status: 401 });

        const secret = new TextEncoder().encode(JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);

        await connectDB();
        const user = await Users.findById(payload.id).select('-password');
        if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

        return NextResponse.json({ user }, { status: 200 });
    } catch (e) {
        const eMsg = e instanceof Error ? `Failed to fetch Profile: ${e.message}` : e;
        return NextResponse.json({ message: eMsg }, { status: 500 });
    }
}