"use client";

import { useEffect, useState } from "react";

import { SitemapEntry } from "@/lib/types";
import { LoadingComponent, Notification } from "@/components/Status";

export default function SitemapPage() {
	const [sitemap, setSitemap] = useState<SitemapEntry[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSitemap = async () => {
			try {
				const res = await fetch("/api/sitemap");
				if (!res.ok) throw new Error("Failed to fetch sitemap");

				const text = await res.text();
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(text, "text/xml");

				const urls = Array.from(xmlDoc.getElementsByTagName("url")).map(
					(url) => ({
						loc: url.getElementsByTagName("loc")[0]?.textContent || "",
						lastmod: url.getElementsByTagName("lastmod")[0]?.textContent || "",
						priority: parseFloat(
							url.getElementsByTagName("priority")[0]?.textContent || "0",
						),
					}),
				);

				setSitemap(urls);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		};

		fetchSitemap();
	}, []);

	if (loading) return <LoadingComponent />;
	if (error) return <Notification message={error} />;

	return (
		<main className="w-full h-[100vh] flex justify-center items-center">
			<div className="max-w-4xl p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000]">
				<h1 className="text-3xl font-extrabold text-black mb-6 border-b-2">
					Sitemap
				</h1>
				<ul className="list-disc list-inside space-y-3">
					{sitemap.map((entry, index) => (
						<li key={index}>
							<a
								href={entry.loc}
								className="text-blue-700 underline font-semibold hover:text-black transition"
							>
								{entry.loc.replace("https://veoveneht.eu.org/blog", "") ||
									"/blog"}
							</a>
							<span className="text-gray-600 text-sm ml-2">
								(Updated: {new Date(entry.lastmod).toLocaleDateString()})
							</span>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
