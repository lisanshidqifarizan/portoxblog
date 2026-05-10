"use client";
import Link from "next/link";
import Profile from "../Profile";
import { useState } from "react";

export default function Navigation() {
	const [title, setTitle] = useState("");
	return (
		<header className="w-full flex justify-center bg-white">
			<nav className="w-full max-w-[1280px] flex justify-center items-center px-6 py-2 bg-white border-b-2 border-black">
				<h1 className="sm:text-[1rem] font-semibold">
					veoveneht<span id="blink">_</span>
				</h1>

				<img src="/img/logo-med.png" alt="logo veoveneht" width="60" height="60" className="mx-auto"/>

				<ul className="flex items-center gap-2 sm:gap-2 transition-all">
					<li>
						<label>
							<input 
								type="text"
								name="search"
								placeholder="Search title.."
								value={title}
								onChange={(e)=> setTitle(e.target.value)}
								className="focus:ring-black"
							/>
						</label>
					</li>
					<li>
						<Link href="/blog" className="hover:text-blue-500 transition">
							Home
						</Link>
					</li>
					<li>
						<Profile />
					</li>
				</ul>
			</nav>
		</header>
	);
}
