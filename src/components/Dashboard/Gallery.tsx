'use client'
import { getPosts } from "@/lib/api";
import { typesPosts } from "@/lib/types";
import { useEffect, useState } from "react";
import { LoadingComponent } from "../Status";

export default function Gallery() {
    const [posts, setPosts] = useState<typesPosts[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getPosts();

                if (res) {
                    setPosts(res.posts);
                    setLoading(false)
                }
            } catch (err) {

            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div>
                {loading && loading ? (
                    <LoadingComponent />
                ) : (
                    <div className="flex flex-col gap-4">{
                        posts.map((post, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <img src={post.images[0]} className="w-[80px] h-[80px]" />
                                <p>{post.author}</p>
                                <div>
                                    <p>Actions</p>
                                    <p>Name</p>
                                    <p>delete</p> {/*Need to make an API for Delete the images*/}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}