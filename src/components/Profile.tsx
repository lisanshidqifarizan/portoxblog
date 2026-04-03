"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useAuth } from "@/context/Provider";
import { getProfile } from "@/lib/api";

export default function Profile() {
	const [dropDown, setDropDown] = useState(false);
	const { user, setUser } = useAuth();
	const router = useRouter();

	useEffect(() => {
		const fetch = async () => {
			const res = await getProfile();
			setUser(res.user);
		};
		fetch();
	}, [setUser]);

	const handleLogout = async () => {
		await fetch("/api/auth/logout", {
			method: "POST",
			credentials: "include",
		});
		setUser(null);
		router.replace("/blog/login");
	};

	return (
		<div className="relative">
			{/* Trigger Button */}
			<button
				onClick={() => setDropDown((prev) => !prev)}
				className="flex items-center"
			>
				{user?.avatar ? (
					<img
						src={user?.avatar}
						alt="Avatar"
						className="w-[50px] h-[50px] transition duration-200"
					/>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="40px"
						viewBox="0 -960 960 960"
						width="40px"
						fill="#000000"
					>
						<path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm160.5-234.5Q343-529 343-587t39.5-97.5Q422-724 480-724t97.5 39.5Q617-645 617-587t-39.5 97.5Q538-450 480-450t-97.5-39.5ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm107.5-76Q640-172 691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140q55 0 107.5-16Zm-52-375.5Q557-553 557-587t-21.5-55.5Q514-664 480-664t-55.5 21.5Q403-621 403-587t21.5 55.5Q446-510 480-510t55.5-21.5ZM480-587Zm0 374Z" />
					</svg>
				)}
			</button>

			{/* Dropdown Neo-Brutalist Style */}
			<div
				className={`absolute top-[58px] shadow-lg border-t-2 right-0 z-50 transition-all duration-500 overflow-hidden bg-white ${
					dropDown ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
				} w-[260px]`}
			>
				{user ? (
					<>
						<div className="flex items-center gap-2 p-2 border-b-1 border-black">
							<img
								src={user.avatar}
								alt="Avatar"
								className="w-[48px] h-[48px]"
							/>
							<div>
								<p className="font-extrabold text-black">{user.name}</p>
								<p className="text-sm text-gray-700">@{user.username}</p>
								<p className="text-xs text-gray-500">{user.role}</p>
							</div>
						</div>
						<div className="flex flex-col">
							<Link
								href="/blog/profile"
								className="bg-blue-200 px-2 py-2 shadow-md hover:bg-blue-300"
							>
								Profile
							</Link>
							{user.role === "admin" && (
								<Link
									href="/blog/dashboard"
									className="bg-lime-200 px-2 py-2 shadow-md hover:bg-lime-300"
								>
									Dashboard
								</Link>
							)}
							<button
								onClick={() => {
									handleLogout();
								}}
								className="bg-red-200 px-2 py-2 rounded-b-lg shadow-md hover:bg-red-300 text-left"
							>
								Logout
							</button>
						</div>
					</>
				) : (
					<div className="flex flex-col">
						<Link
							href="/blog/login"
							className="bg-green-200 px-4 py-2 shadow-md text-center hover:bg-green-300"
						>
							Login
						</Link>
						<Link
							href="/blog/register"
							className="bg-blue-200 px-4 py-2 shadow-md text-center hover:bg-blue-300"
						>
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
