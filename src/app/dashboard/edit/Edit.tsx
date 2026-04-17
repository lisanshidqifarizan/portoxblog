"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getPostById, updatePost } from "@/lib/api";
import { CldUploadWidget } from "next-cloudinary";
import Tiptap from "@/components/RichTextEditor/Tiptap";

export default function CEdit() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [category, setCategory] = useState<string[]>([]);
	const [images, setImages] = useState<string[]>([]);
	const [tags, setTags] = useState<string[]>([]);
	const [tagInput, setTagInput] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!id) return;

		const fetchPost = async () => {
			try {
				const data = await getPostById(id);
				if (!data) throw new Error("Post not found");

				setTitle(data.title || "");
				setContent(data.content || "");
				setCategory(data.category || []);
				setImages(data.images || []);
				setTags(data.tags || []);
			} catch (err) {
				console.error("Error fetching post:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, [id]);

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const updatedPost = { title, content, images, category, tags };
			const success = await updatePost(id as string, updatedPost);

			if (success) {
				alert("Post updated successfully!");
				router.push("/dashboard");
			}
		} catch (err) {
			console.error("Error updating post:", err);
		}
	};

	const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setCategory((prev) =>
			prev.includes(value)
				? prev.filter((cat) => cat !== value)
				: [...prev, value],
		);
	};

	const addTag = () => {
		if (tagInput.trim() !== "" && !tags.includes(tagInput)) {
			setTags([...tags, tagInput.trim()]);
			setTagInput("");
		}
	};

	const removeTag = (index: number) => {
		setTags(tags.filter((_, i) => i !== index));
	};

	if (loading) return <p className="text-center mt-6">Loading...</p>;

	return (
		<div className="w-full flex flex-col p-2 border-2 bg-gray-100">
			<h1 className="text-2xl font-bold mb-4">Edit Post</h1>
			<form onSubmit={handleUpdate} className="flex flex-col gap-4">
				<label>
					<input
						type="text"
						name="title"
						placeholder="Enter title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full p-2 border-2 border-black text-black focus:outline-none"
					/>
				</label>

				<div className="flex flex-col gap-2">
					<span>
						<CldUploadWidget
							uploadPreset="veoidb_upload_preset"
							onSuccess={(result) => {
								const uploadResult = result as { info: { secure_url: string } };
								setImages([...images, uploadResult.info.secure_url]);
							}}
						>
							{({ open }) => (
								<button
									type="button"
									className="bg-blue-200 border-2 border-black px-4 py-2 hover:bg-blue-300"
									onClick={() => open()}
								>
									Upload Image
								</button>
							)}
						</CldUploadWidget>
					</span>
					{/* Images URL */}
					<div className="w-fit flex gap-2">
						{images.map((url, index) => {
							return (
								<div key={index} className="flex flex-col gap-2">
									<img
										src={url}
										alt={`Uploaded ${index}`}
										className="w-[120px] h-[120px]"
									/>
									<p
										className="w-fit cursor-pointer hover:text-blue-400 h-fit text-gray-500"
										onClick={() => {
											navigator.clipboard.writeText(url);
											alert(`Copied to clipboard: ${url}`);
										}}
									>
										Copy Link
									</p>
								</div>
							);
						})}
					</div>
				</div>

				<Tiptap onChange={setContent} value={content} />

				{/* ✅ Checkbox untuk kategori */}
				<div className="space-y-2">
					<label className="block font-semibold text-gray-700">
						Select Categories:
					</label>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
						{[
							{ value: "film", label: "Film & Series" },
							{ value: "games", label: "Games" },
							{ value: "music", label: "Music" },
							{ value: "art", label: "Art & Design" },
							{ value: "photography", label: "Photography" },
						].map((cat) => (
							<label
								key={cat.value}
								className="flex items-center gap-2 text-gray-800 text-sm"
							>
								<input
									type="checkbox"
									value={cat.value}
									onChange={handleCategoryChange}
									checked={category.includes(cat.value)}
									className="accent-blue-500 w-4 h-4"
								/>
								{cat.label}
							</label>
						))}
					</div>
				</div>

				{/* //* Tags Section */}
				<div>
					<label className="block font-semibold text-gray-700">Add tags:</label>
					<div className="flex items-center gap-2 mt-2">
						<input
							type="text"
							placeholder="Enter tag..."
							value={tagInput}
							onChange={(e) => setTagInput(e.target.value)}
							className="p-2 border-2 border-black w-[200px] focus:outline-none"
						/>
						<button
							onClick={addTag}
							className="bg-blue-200 border-2 border-black px-4 py-2 hover:bg-blue-300"
							type="button"
						>
							Add
						</button>
					</div>

					{/* //* Display Added Tags */}
					<div className="flex flex-wrap gap-2 mt-3">
						{tags.map((tag, index) => (
							<div
								key={index}
								className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm font-medium"
							>
								<span className="mr-2">#{tag}</span>
								<button
									onClick={() => removeTag(index)}
									className="text-red-500 hover:text-red-700"
								>
									✕
								</button>
							</div>
						))}
					</div>
				</div>

				<button
					type="submit"
					className="bg-green-200 border-2 border-black px-4 py-2 hover:bg-green-300"
				>
					Update Post
				</button>
			</form>
		</div>
	);
}
