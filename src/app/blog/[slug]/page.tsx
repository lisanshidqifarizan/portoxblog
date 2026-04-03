"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getPosts } from "@/lib/api";
import { typesPosts } from "@/lib/types";
import { LoadingComponent, NotFound } from "@/components/Status";

import Navigation from "@/components/Homepage/Navigation";
import Footer from "@/components/Homepage/Footer";
import Sidebar from "@/components/Homepage/Sidebar";
import Comment from "@/components/Homepage/Comment";

function generateSlug(title: string) {
	return title
		.replace(/[^\w\s]/gi, "") // hapus simbol
		.replace(/\s+/g, "-"); // ganti spasi jadi strip
}

export default function SlugPage() {
	const [post, setPost] = useState<typesPosts | null>(null);
	const [loading, setLoading] = useState(true);
	const params = useParams();

	useEffect(() => {
		const fetch = async () => {
			const data = await getPosts();

			if (data && data.posts && params.slug) {
				const currentSlug = params.slug;
				const foundPost = data.posts.find((p: typesPosts) => {
					const generated = generateSlug(p.title);
					return generated === currentSlug;
				});

				setPost(foundPost || null);
				setLoading(false);
			}
		};

		fetch();
	}, [params.slug]);

	return (
		<>
			<header className="w-full flex justify-center">
				<Navigation />
			</header>
			<main className="w-full flex justify-center bg-[#f2f6f8]">
				<div className="max-w-[1100px] h-full flex justify-between flex-col md:flex-row gap-4 p-4">
					{loading && loading ? (
						<LoadingComponent />
					) : !post ? (
						<NotFound />
					) : (
						<div className="w-full flex flex-col gap-4">
							<div className="w-full max-w-4xl bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6">
								<h1 className="text-3xl font-extrabold text-black mb-4">
									{post.title}
								</h1>
								<div className="flex gap-1 flex-wrap border-b-4 border-black pb-2">
									<p className="w-fit bg-yellow-300 px-2 py-1 border-2 border-black">
										By: {(post.author as any).username}
									</p>
									<p className="w-fit bg-green-300 px-2 py-1 border-2 border-black">
										{new Date(post.createdAt).toLocaleDateString()}
									</p>
									{Array.isArray(post.tags) && post.tags.length > 0 ? (
										post.tags.map((tag: string, idx: number) => (
											<span
												key={idx}
												className="bg-pink-300 px-2 py-1 border-2 border-black text-xs"
											>
												#{tag}
											</span>
										))
									) : (
										<span className="text-gray-500 text-xs italic">
											No tags
										</span>
									)}
								</div>
								<div
									className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-black"
									dangerouslySetInnerHTML={{ __html: post.content }}
								/>
							</div>

							{/* Comment Form */}
							<Comment />
							<div>
								<div dangerouslySetInnerHTML={{ __html: post.comment }} />
							</div>
						</div>
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
