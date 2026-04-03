'use slient'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

import { getPosts, deletePost } from "@/lib/api"
import { typesPosts } from "@/lib/types"
import { LoadingComponent, Notification } from "../Status";

export default function MyPosts() {
    const [posts, setPosts] = useState<typesPosts[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();

                if (data) {
                    setPosts(data.posts);
                    setLoading(false);
                }
            } catch (err) {
                console.error(err instanceof Error ? `can't fetch posts ${err.message}` : err);
            }
        }

        fetchPosts()
    }, [])

    const handleDelete = async (postId: string) => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
        setDeleting(postId);

        try {
            const success = await deletePost(postId); // ✅ Pakai fungsi API

            if (success) {
                setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
            } else {
                throw new Error("Failed to delete post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Error deleting post");
        } finally {
            setDeleting(null);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">My Posts</h2>

            {loading ? (
                <LoadingComponent />
            ) : posts.length === 0 ? (
                <Notification message="Posts not available" />
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 text-left text-sm font-medium text-gray-700">Image</th>
                                <th className="p-3 text-left text-sm font-medium text-gray-700">Title</th>
                                <th className="p-3 text-center text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        <div className="w-20 h-20 overflow-hidden rounded bg-gray-200">
                                            <img
                                                src={post.images[0] || "/img/default.png"}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-3 font-semibold text-gray-800">{post.title}</td>
                                    <td className="p-3 text-center flex gap-2 justify-center items-center">
                                        <button
                                            onClick={() => {
                                                const currentURL = `https://veoveneht.eu.org/${post.slug}`
                                                navigator.clipboard.writeText(currentURL)
                                                alert("Copied to clipboard")
                                            }}
                                            title="Share"
                                            className="hover:text-blue-500"
                                        >
                                            <span className="material-symbols-outlined">share</span>
                                        </button>
                                        <button
                                            onClick={() => router.push(`/dashboard/edit?id=${post._id}`)}
                                            title="Edit"
                                            className="hover:text-green-500"
                                        >
                                            <span className="material-symbols-outlined">edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            disabled={deleting === post._id}
                                            title="Delete"
                                            className={`hover:text-red-500 ${deleting === post._id ? "opacity-50" : ""}`}
                                        >
                                            {deleting === post._id ? "Deleting..." : (
                                                <span className="material-symbols-outlined">delete</span>
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}