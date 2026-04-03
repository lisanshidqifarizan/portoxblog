import Link from "next/link";

export const PortfolioNavigation = () => {
	return (
		<header className="flex justify-center w-full h-auto border-b-2">
			<nav className="flex items-center max-w-[1440px] w-full py-4">
				<h1 className="font-bold mr-auto">
					Lisan<span id="blink">_</span>
				</h1>
				<div className="flex gap-2">
					<ul className="flex gap-2">
						<Link href="/" className="relative group">
							Home
							<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/about" className="relative group">
							About
							<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/projects" className="relative group">
							Projects
							<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export const PortfolioFooter = () => {
	const date = new Date();
	return (
		<footer className="flex justify-between w-full px-32 py-8">
			<p>{date.getFullYear()} &copy; All Rights Reserved</p>
			<p>
				<Link
					href="https://instagram.com/lisan_sf"
					className="decoration-green-500 hover:underline decoration-2"
				>
					Say hi
				</Link>
			</p>
		</footer>
	);
};
