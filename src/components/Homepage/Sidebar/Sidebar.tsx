"use client";

import { getPosts } from "@/lib/api";
import { typesPosts } from "@/lib/types";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export const Tags = () => {
	const [tags, setTags] = useState<string[]>([]);
	const fetched = useRef(false);

	useEffect(() => {
		const fetch = async () => {
			if (fetched.current) return;
			fetched.current = true;

			const data = await getPosts();

			const allTags = data.posts.flatMap(
				(post: typesPosts) => post.tags,
			) as string[];

			const uniqueTags = [...new Set(allTags.filter(Boolean))];

			setTags(uniqueTags);
		};

		fetch();
	}, []);

	return (
		<div className="bg-white rounded shadow-sm">
			<h4 className="text-center text-lg tracking-wide uppercase border-b border-black">
				Tags
			</h4>
			<div className="flex flex-wrap gap-1 p-2">
				{tags.length > 0 ? (
					tags.map((tag, idx) => (
						<Link
							key={idx}
							href={`/tags/${tag}`}
							className="bg-white text-sm px-2 py-1 border rounded hover:bg-black hover:text-white transition"
						>
							#{tag}
						</Link>
					))
				) : (
					<p className="text-sm text-center w-full text-gray-500">
						No tags available
					</p>
				)}
			</div>
		</div>
	);
};

export const SupportCard = () => {
	return (
		<div className="bg-white rounded shadow-sm">
			<h4 className="text-center text-lg tracking-wide uppercase border-b-1 border-black">
				Support Us
			</h4>
			<div className="flex justify-center items-center">
				<a
					href="https://trakteer.id/veoveneht/tip?open=true"
					target="_blank"
					rel="noreferrer noopener"
					className="p-2"
				>
					<img
						className="h-[40px]"
						src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png?date=18-11-2023"
						alt="Support Kami"
					/>
				</a>
			</div>
		</div>
	);
};
