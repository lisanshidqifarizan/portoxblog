"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { getPosts } from "@/lib/api";
import { typesPosts } from "@/lib/types";
import { LoadingComponent, NotFound } from "@/components/Status";

import Navigation from "@/components/Homepage/Navigation";
import Sidebar from "@/components/Homepage/Sidebar";
import Footer from "@/components/Homepage/Footer";

function generateTag(tag: string[]) {
	return tag;
}

interface typeTag {
	tag: string[];
}

export default function PostByTags() {
	const { tag } = useParams();
	const [posts, setPosts] = useState<typesPosts[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetch = async () => {
			if (!tag) return;
			const decodedTag = decodeURIComponent(tag as string);
			const res = await getPosts();
			if (!res || !res.posts) return;

			const found = res.posts.filter((p: typesPosts) =>
				p.tags.includes(decodedTag),
			);
			console.log(found);
			setPosts(found);
			setLoading(false);
			console.log("Found posts:", found);
		};
		fetch();
	}, [tag]);

	return (
		<>
			<header className="w-full flex justify-center">
				<Navigation />
			</header>
			<main className="w-full flex justify-center bg-[#f2f6f8]">
				<div className="max-w-[1100px] h-full flex justify-between flex-col md:flex-row gap-4 p-4">
					{loading ? (
						<LoadingComponent />
					) : !posts ? (
						<NotFound />
					) : (
						posts.map((post) => (
							<div
								key={post._id}
								className="flex flex-col w-full sm:min-w-[300px] gap-2 px-4 pb-4 bg-white rounded shadow-sm"
							>
								{/* Meta Info */}
								<div className="flex flex-col text-sm text-black flex-wrap font-semibold">
									{/* Title */}
									<h1 className="w-fit hover:text-blue-500 hover:underline">
										<Link
											href={`/blog/${post.slug}`}
											className="w-fit text-[1.5rem] sm:text-[1.72rem] md:text-[2rem] "
										>
											{post.title}
										</Link>
									</h1>
									<div className="flex gap-2 flex-wrap">
										<p className="w-fit">By: {(post.author as any).username}</p>
										<p className="w-fit">
											Date: {new Date(post.createdAt).toLocaleDateString()}
										</p>
									</div>
								</div>
								<div className="max-w-[560px] flex gap-2 flex-col sm:max-w-[768px] sm:flex-row">
									<Link
										href={post.slug}
										className="w-full h-full min-w-[210px] max-w-[640px] min-h-[140px] max-h-[200px] sm:max-w-[210px] sm:max-h-[15px] flex block overflow-hidden rounded"
									>
										<img
											src={post.images[0] ? post.images[0] : "/img/default.png"}
											className="object-cover opacity-80 transition-all duration-500 ease-in-out pointer hover:scale-120 pointer"
											alt={`pic of ${post.title}`}
										/>
									</Link>
									<div className="max-w-[640px] sm:max-w-[768px] md:max-w-[1024px] lg:max-w-[1100px] overflow-hidden">
										<p className="text-gray-800 text-sm sm:text-base">
											{post.content.replace(/<[^>]*>/g, "").substring(0, 150)}{" "}
											...
										</p>
										<Link
											href={post.slug}
											className="text-blue-500 hover:underline"
										>
											&gt;Read More
										</Link>
									</div>
								</div>
							</div>
						))
					)}
					<Sidebar />
				</div>
			</main>
			<footer className="w-full flex justify-center bg-gray-100">
				<Footer />
			</footer>
		</>
	);
}
