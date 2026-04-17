"use client";

import { useAuth } from "@/context/Provider";

export default function ProfilePage() {
	const { user } = useAuth();
	return (
		<main className="w-full min-h-screen flex items-center justify-center bg-yellow-100 px-6">
			<div className="border-4 border-black bg-white shadow-[6px_6px_0_#000] p-6 w-full max-w-md text-black">
				<div className="flex flex-col items-center gap-4">
					<img
						src={user?.avatar}
						alt="Profile"
						className="w-28 h-28 rounded-full object-cover"
					/>
					<h1 className="text-3xl font-extrabold">{user?.name}</h1>
					<p className="text-gray-700">@{user?.username}</p>
					<p className="text-sm text-gray-700">✉️ {user?.email}</p>
					<span className="inline-block px-3 py-1 mt-2 bg-black text-white text-xs font-bold border-2 border-black shadow-[2px_2px_0_#000]">
						ROLE: {user?.role.toUpperCase()}
					</span>
				</div>

				<hr className="border-t-4 border-black my-6" />

				<div className="text-center">
					<p className="text-sm">
						🚧 This profile is still under development. Stay tuned for editing
						features, badges, and other cool stats!
					</p>
				</div>
			</div>
		</main>
	);
}
