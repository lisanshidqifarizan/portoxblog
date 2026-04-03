import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import Post from "@/lib/models/Posts";

export async function GET() {
	try {
		await connectDB();

		// ✅ Ambil data langsung dari MongoDB (tanpa fetch)
		const posts = await Post.find().sort({ updatedAt: -1 }).lean();

		// ✅ Buat XML sitemap
		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>/blog</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>/blog/about</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>/blog/contact</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>/blog/privacy-policy</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>/blog/sitemap</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>/blog/category</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>/blog/latest</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
            ${posts
							.map(
								(post) => `
            <url>
                <loc>https://veoveneht.eu.org/blog/${post.slug}</loc>
                <lastmod>${post.updatedAt.toISOString() || new Date().toISOString()}</lastmod>
                <priority>0.9</priority>
            </url>
            `,
							)
							.join("")}
        </urlset>`;

		// ✅ Kirim sitemap dalam format XML
		return new NextResponse(sitemap, {
			headers: { "Content-Type": "application/xml" },
		});
	} catch (error) {
		console.error("Sitemap error:", error);
		return NextResponse.json(
			{
				message: "Failed to generate sitemap",
				error: error instanceof Error ? error.message : error,
			},
			{ status: 500 },
		);
	}
}
