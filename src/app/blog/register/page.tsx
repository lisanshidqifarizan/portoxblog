"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { RequestRegister } from "@/lib/api";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");

	const router = useRouter();

	const onsubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const data = await RequestRegister(email, password, username, name);

			if (password !== confirmPassword) return alert("Password didn't match!");

			if (data && data.message === "Succes created your account!") {
				setEmail("");
				setPassword("");
				setUsername("");
				setName("");
				alert(data.message);
				router.push("/login");
				return;
			} else {
				alert(data.message || "Failed to register, try again");
			}
		} catch (err) {
			console.error(
				err instanceof Error ? `Failed to register: ${err.message}` : err,
			);
		}
	};

	return (
		<main className="w-full flex flex-col items-center justify-center h-screen">
			<div className="w-full max-w-md bg-white p-6 border-4 border-black shadow-[6px_6px_0px_#000]">
				<h2 className="text-3xl font-extrabold text-black mb-6 border-b-4 border-black pb-2 uppercase">
					Register
				</h2>
				<form onSubmit={onsubmit} className="flex flex-col gap-2">
					<label>
						<input
							type="text"
							value={name}
							placeholder="Full name"
							onChange={(e) => setName(e.target.value)}
							className="w-full p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ease-in-out duration-150"
						/>
					</label>
					<label>
						<input
							type="email"
							value={email}
							placeholder="Email address"
							onChange={(e) => setEmail(e.target.value)}
							className="w-full p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ease-in-out duration-150"
						/>
					</label>
					<label>
						<input
							type="text"
							value={username}
							placeholder="Username"
							onChange={(e) => setUsername(e.target.value)}
							className="w-full p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ease-in-out duration-150"
						/>
					</label>
					<label>
						<input
							type="password"
							value={password}
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ease-in-out duration-150"
						/>
					</label>
					<label>
						<input
							type="password"
							value={confirmPassword}
							placeholder="Confirm Password"
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="w-full p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ease-in-out duration-150"
						/>
					</label>
					<div className="flex items-center justify-between flex-wrap">
						<p className="text-gray-900">
							{" "}
							Already have an account?{" "}
							<a
								href="/login"
								className="text-sm text-blue-500 -200 hover:underline"
							>
								Login
							</a>
						</p>
					</div>
					<button
						type="submit"
						className="bg-blue-400 text-black font-bold py-2 px-4 border-2 border-black rounded shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200"
					>
						Register
					</button>
				</form>
			</div>
		</main>
	);
}
