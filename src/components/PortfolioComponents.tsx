import Link from "next/link";

export const PortfolioNavigation = () => {
	return (
		<header className="flex justify-center w-full h-auto text-white">
			<nav className="flex items-center max-w-[1440px] w-full py-4 px-6">
				<h1 className="font-bold mr-auto">
					Lisan<span id="blink">_</span>
				</h1>
				<div className="flex gap-2">
					<ul className="flex gap-2">
						<Link href="/" className="relative group">
							Home
							<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/portfolio/about" className="relative group">
							About
							<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/portfolio/projects" className="relative group">
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
		<footer className="flex justify-center items-center w-full text-white">
			<div className="flex justify-between w-full max-w-[1440px] px-6 py-8">
				<p>{date.getFullYear()} &copy; All Rights Reserved</p>
				<p>
					<Link
						href="https://instagram.com/veoveneht"
						className="decoration-green-500 hover:underline decoration-2"
						rel="noopener noreferrer"
						target="_blank"
					>
						Say hi
					</Link>
				</p>
			</div>
		</footer>
	);
};
