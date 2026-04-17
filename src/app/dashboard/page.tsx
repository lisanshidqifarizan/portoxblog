"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import AddPost from "@/components/Dashboard/AddPost";
import MyPosts from "@/components/Dashboard/MyPosts";
import Gallery from "@/components/Dashboard/Gallery";
import Users from "@/components/Dashboard/Users";
import { Notification } from "@/components/Status";
import { getProfile } from "@/lib/api";
import { useAuth } from "@/context/Provider";

export default function Dashboard() {
	const [changer, setChanger] = useState<"add" | "my" | "gallery" | "users">(
		"add",
	);
	const { user, setUser } = useAuth();

	const router = useRouter();

	useEffect(() => {
		const fetch = async () => {
			const res = await getProfile();
			setUser(res.user);
		};
		fetch();
		if (user?.role !== "admin") {
			alert("Need admin access!");
			router.push("/");
		}
	}, [router]);

	return (
		<div className="w-full flex flex-col p-2 border-2 bg-gray-100">
			{/* Navigation */}
			<div className="flex gap-2 w-fit pb-2 border-b-4">
				<p
					onClick={() => {
						setChanger("add");
					}}
					className="pointer bg-blue-200 border-2 px-4 py-2 hover:bg-blue-300"
				>
					Add Post
				</p>
				<p
					onClick={() => {
						setChanger("my");
					}}
					className="pointer bg-blue-200 border-2 px-4 py-2 hover:bg-blue-300"
				>
					My Posts
				</p>
				<p
					onClick={() => {
						setChanger("gallery");
					}}
					className="pointer bg-blue-200 border-2 px-4 py-2 hover:bg-blue-300"
				>
					Gallery
				</p>
				<p
					onClick={() => {
						setChanger("users");
					}}
					className="pointer bg-blue-200 border-2 px-4 py-2 hover:bg-blue-300"
				>
					Users
				</p>
			</div>

			{/* When navigation change */}
			<div className="w-full">
				{changer && changer === "add" ? (
					<AddPost />
				) : changer === "my" ? (
					<MyPosts />
				) : changer === "gallery" ? (
					<Gallery />
				) : changer === "users" ? (
					<Users />
				) : (
					<Notification message="Loading..." />
				)}
			</div>
		</div>
	);
}
