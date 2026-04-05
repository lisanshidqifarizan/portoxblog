"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { RequestLogin } from "@/lib/api";

export default function CLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const onsubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) return alert("All fields are required!");

		try {
			const data = await RequestLogin(email, password);

			if (data) {
				setEmail("");
				setPassword("");
				router.push("/blog");
			} else {
				alert(data.message);
			}
		} catch (err) {
			console.error(err instanceof Error ? `Error is: ${err.message}` : err);
		}
	};

	return (
		<main className="w-full flex flex-col items-center justify-center h-screen">
			<div className="w-full max-w-md bg-white p-6 border-4 border-black shadow-[6px_6px_0px_#000]">
				<h2 className="text-3xl font-extrabold text-black mb-6 border-b-4 border-black pb-2 uppercase">
					Login
				</h2>
				<form onSubmit={onsubmit} className="flex flex-col w-fit gap-2">
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
							type="password"
							value={password}
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ease-in-out duration-150"
						/>
					</label>
					<div className="flex items-center justify-between flex-wrap">
						<label
							htmlFor="remember-me"
							className="text-sm text-gray-900 cursor-pointer"
						>
							<input type="checkbox" id="remember-me" className="mr-2" />
							Remember me
						</label>
						<a
							href="#"
							className="text-sm text-blue-500 hover:underline mb-0.5"
						>
							Forgot password?
						</a>
						<p className="text-gray-900 mt-4">
							{" "}
							Don't have an account?{" "}
							<a
								href="/blog/register"
								className="text-sm text-blue-500 -200 hover:underline mt-4"
							>
								Register
							</a>
						</p>
					</div>
					<button
						type="submit"
						className="bg-blue-400 text-black font-bold py-2 px-4 border-2 border-black rounded shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200"
					>
						Login
					</button>
				</form>
			</div>
		</main>
	);
}
