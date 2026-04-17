import Link from "next/link";
import Profile from "../Profile";

export default function Navigation() {
	return (
		<header className="w-full flex justify-center border-b-2 border-black bg-white">
			<nav className="w-[1440px] flex justify-between items-center px-6 py-2 bg-white">
				<h1 className="sm:text-[1rem]">
					veoveneht<span id="blink">_</span>
				</h1>

				<ul className="flex items-center gap-2 sm:gap-2 transition-all">
					<li>
						<Link href="/" className="hover:text-blue-500 transition">
							Home
						</Link>
					</li>
					<li>
						<Link href="/portfolio" className="hover:text-blue-500 transition">
							Portfolio
						</Link>
					</li>
					<Profile />
				</ul>
			</nav>
		</header>
	);
}
