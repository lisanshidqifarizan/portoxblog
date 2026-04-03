import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";

import { addPost } from "@/lib/api";
import Tiptap from "@/components/RichTextEditor/Tiptap";

function generateSlug(title: string) {
	return title
		.replace(/[^\w\s]/gi, "") // hapus simbol
		.replace(/\s+/g, "-"); // ganti spasi jadi strip
}

export default function AddPost() {
	// * State
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [category, setCategory] = useState<string[]>([]);
	const [images, setImages] = useState<string[]>([]);
	const [tags, setTags] = useState<string[]>([]);
	const [tagInput, setTagInput] = useState("");

	// * Router
	const router = useRouter();

	// * Pengiriman form postingan
	const sendForm = async (e: React.FormEvent) => {
		e.preventDefault();
		const author = sessionStorage.getItem("username");

		if (!title) return alert("Title is required!");
		if (!content) return alert("Content is required!");
		if (images.length < 2 || !images)
			return alert("Image is required! Need 2 Images Upload or More.");
		if (category.length === 0)
			return alert("At least one category is required!");
		if (!author) return alert("Author is required!");

		const slug = generateSlug(title);

		try {
			const data = await addPost(
				author,
				title,
				content,
				slug,
				images,
				category,
				tags,
			);
			if (data) {
				alert("Post submitted successfully!");
				setTitle("");
				setContent("Add post again?");
				setCategory([]);
				setImages([]);
				setTags([]);
				router.refresh();
			} else {
				alert(data.message || "Failed to submit post");
			}
		} catch (error) {
			console.error("Error submitting post:", error);
			alert("Error submitting post");
		}
	};

	// * Cloudinary Interface
	interface CloudinaryUploadResult {
		info: {
			url: string;
			[key: string]: unknown;
		};
	}

	const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setCategory(
			(prev) =>
				prev.includes(value)
					? prev.filter((cat) => cat !== value) // ✅ Hapus jika sudah ada
					: [...prev, value], // ✅ Tambahkan jika belum ada
		);
	};

	const addTag = () => {
		if (tagInput.trim() !== "" && !tags.includes(tagInput)) {
			setTags([...tags, tagInput.trim()]);
			setTagInput(""); // Reset input
		}
	};

	const removeTag = (index: number) => {
		setTags(tags.filter((_, i) => i !== index));
	};

	return (
		<div className="p-4">
			<h2 className="text-2xl font-semibold mb-4">Add Post</h2>

			<div className="flex flex-col gap-2">
				<span>
					<CldUploadWidget
						uploadPreset="veoidb_upload_preset"
						options={{
							sources: ["local", "url", "camera", "instagram", "google_drive"],
							maxFiles: 3,
						}}
						onSuccess={(results) => {
							const uploadResult = results as CloudinaryUploadResult;
							setImages((prevUrls) => [...prevUrls, uploadResult.info.url]);
						}}
					>
						{({ open, isLoading }) => (
							<button
								type="button"
								className="bg-lime-200 border-2 border-black px-4 py-2 hover:bg-lime-300"
								onClick={() => open()}
								disabled={isLoading}
							>
								{isLoading ? "Uploading..." : "Upload Image"}
							</button>
						)}
					</CldUploadWidget>
				</span>
				{/* Images URL */}
				<div className="w-fit flex gap-4">
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
									Klik to Copy Link
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<form
				onSubmit={sendForm}
				className="flex flex-col gap-4 bg-gray-100 mt-4 text-grey-950"
			>
				{/* //* ✅ Input Judul */}
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
							className="bg-lime-200 border-2 border-black px-4 py-2 hover:bg-lime-300"
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
				<Tiptap onChange={(e) => setContent(e)} />
				<button
					type="submit"
					className="bg-lime-200 border-2 border-black px-4 py-2 hover:bg-lime-300"
				>
					ADD POST
				</button>
			</form>
		</div>
	);
}
