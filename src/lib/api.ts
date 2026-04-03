import { typesPosts } from "./types";

export async function RequestLogin(email: string, password: string) {
	const res = await fetch("/api/auth/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password }),
	});

	if (res.status === 200) {
		return await res.json();
	}
	{
		return;
	}
}

export async function RequestRegister(
	email: string,
	password: string,
	username: string,
	name: string
) {
	const res = await fetch("/api/auth/register", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password, username, name }),
	});

	return await res.json();
}

// * Ambil post berdasarkan ID (pakai query parameter ?id=)
export async function getPostById(id: string) {
	const res = await fetch(`/api/posts?id=${id}`, { method: "GET" });
	if (!res.ok) throw new Error("Failed to fetch post");
	return await res.json();
}

export async function getPosts() {
	const res = await fetch("/api/posts", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	if (!res.ok) throw new Error(`HTTP error! status: ${res.status}!`);

	return await res.json();
}

// * Add posts
export async function addPost(
	author: string,
	title: string,
	content: string,
	slug: string,
	images: string[],
	category: string[],
	tags: string[]
) {
	const res = await fetch("/api/posts", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			author,
			title,
			content,
			slug,
			images,
			category,
			tags,
		}),
	});

	return res.json();
}

// * Update post berdasarkan ID (pakai query parameter ?id=)
export async function updatePost(id: string, updatedPost: Partial<typesPosts>) {
	const res = await fetch(`/api/posts?id=${id}`, {
		// ✅ Pakai ?id=
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(updatedPost),
	});

	if (!res.ok) throw new Error("Failed to update post");
	return await res.json();
}

// * Hapus post berdasarkan ID
export async function deletePost(postId: string): Promise<boolean> {
	const res = await fetch(`/api/posts?id=${postId}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
	});

	if (!res.ok) throw new Error("Failed to delete post");

	return true;
}

export async function getUsers() {
	const res = await fetch("/api/users", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

	return await res.json();
}

//* fetch a User
export async function getProfile() {
	const res = await fetch("/api/auth/me", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	return await res.json();
}
