"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { LoadingComponent, NotFound } from "@/components/Status";
import { usePosts } from "@/context/Provider";

export default function Cards() {
	const { posts } = usePosts();
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 5;

	useEffect(() => {
		if (posts && posts.length > 0) return setLoading(false);
	}, [posts]);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	return (
		<div className="flex flex-col gap-4">
			{loading ? (
				<LoadingComponent />
			) : posts.length === 0 ? (
				<NotFound />
			) : (
				currentPosts.map((post) => (
					<div
						key={post._id}
						className="flex flex-col w-full min-w-[300px] gap-2 px-4 pb-4 bg-white rounded shadow-sm"
					>
						{/* Meta Info */}
						<div className="flex flex-col text-sm text-black flex-wrap font-semibold">
							{/* Title */}
							<h1 className="w-fit hover:text-blue-500 hover:underline">
								<Link
									href={`/${post.slug}`}
									className="w-fit text-[1.5rem] sm:text-[1.72rem] md:text-[2rem] "
								>
									{post.title}
								</Link>
							</h1>
							<div className="flex gap-2 flex-wrap">
								<p className="flex w-fit items-center">
									<span className="material-symbols-outlined">person_edit</span>
									:{(post.author as any).username}
								</p>
								<p className="flex w-fit items-center">
									<span className="material-symbols-outlined">
										calendar_month
									</span>
									: {new Date(post.createdAt).toLocaleDateString()}
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
									className="w-full object-cover opacity-80 transition-all duration-500 ease-in-out pointer hover:scale-120 pointer"
									alt={`pic of ${post.title}`}
								/>
							</Link>
							<div className="max-w-[640px] sm:max-w-[768px] md:max-w-[1024px] lg:max-w-[1100px] overflow-hidden">
								<p className="text-gray-800 text-sm sm:text-base">
									{post.content.replace(/<[^>]*>/g, "").substring(0, 150)} ...
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
			<div className="flex justify-center gap-2 border-b-2 pb-4">
				<button
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					className="px-3 py-1 bg-white transition hover:text-blue-500"
				>
					Prev
				</button>
				{Array.from(
					{ length: Math.ceil(posts.length / postsPerPage) },
					(_, i) => (
						<button
							key={i}
							onClick={() => setCurrentPage(i + 1)}
							className={`px-3 py-1 bg-white ${
								currentPage === i + 1 ? "text-blue-500" : "bg-white"
							} transition hover:text-blue-300`}
						>
							{i + 1}
						</button>
					),
				)}
				<button
					onClick={() =>
						setCurrentPage((prev) =>
							Math.min(prev + 1, Math.ceil(posts.length / postsPerPage)),
						)
					}
					className="px-3 py-1 bg-white transition hover:text-blue-500"
				>
					Next
				</button>
			</div>
		</div>
	);
}
