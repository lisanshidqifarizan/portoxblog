import { NextResponse } from "next/server";

export async function POST() {
    try {
        const res = NextResponse.json({ message: "Signout success!" }, { status: 200 });

        res.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0), // ini penting buat benar-benar hapus
            path: "/", // pastikan sama seperti waktu set
        });

        return res;
    } catch (e) {
        const eMsg = e instanceof Error ? `Failed to delete cookies: ${e.message}` : e;
        return NextResponse.json({ message: eMsg }, { status: 500 });
    }
}
