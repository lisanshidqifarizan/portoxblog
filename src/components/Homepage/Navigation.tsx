import Link from "next/link";
import Profile from "../Profile";

export default function Navigation() {
	return (
		<nav className="w-full flex justify-between items-center px-6 py-2 bg-white border-b-2 border-black">
			<h1 className="tracking-wider">
				veoveneht<span id="blink">_</span>
			</h1>

			<ul className="flex items-center gap-2 sm:gap-2 transition-all">
				<li>
					<Link href="/blog" className="hover:text-orange-500 transition">
						Home
					</Link>
				</li>
				<Profile />
			</ul>
		</nav>
	);
}
