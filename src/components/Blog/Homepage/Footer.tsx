import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full flex justify-center bg-white">
			<div className="w-full max-w-[1240px] px-6 py-10 border-t-2 sm:px-8 md:px-10 lg:px-12 xl:px-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black font-bold">
					{/* Navigasi */}
					<div className="flex flex-col gap-2 bg-white shadow-sm">
						<h3 className="text-center text-lg tracking-wide uppercase border-b-1 border-black py-2">
							Navigasi
						</h3>
						<ul className="grid grid-cols-2 gap-2 text-sm px-2 pb-2">
							<li>
								<Link href="/blog/" className="hover:underline hover:text-blue-500">
									| Home
								</Link>
							</li>
							<li>
								<Link href="/blog/disclaimer" className="hover:underline hover:text-blue-500">
									| Disclaimer
								</Link>
							</li>
							<li>
								<Link href="/blog/contact" className="hover:underline hover:text-blue-500">
									| Contact
								</Link>
							</li>
							<li>
								<Link href="/blog/about" className="hover:underline hover:text-blue-500">
									| About Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Informasi */}
					<div className="flex flex-col gap-2 bg-white shadow-sm">
						<h3 className="text-center text-lg tracking-wide uppercase border-b-1 border-black py-2">
							Informasi
						</h3>
						<ul className="grid grid-cols-2 gap-2 text-sm px-2 pb-2">
							<li>
								<Link href="/blog/faq" className="hover:underline hover:text-blue-500">
									| FAQ
								</Link>
							</li>
							<li>
								<Link href="/blog/sitemap" className="hover:underline hover:text-blue-500">
									| Sitemap
								</Link>
							</li>
							<li>
								<Link href="/blog/privacy-policy" className="hover:underline hover:text-blue-500">
									| Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Copyright */}
					<div className="flex flex-col gap-2 bg-white shadow-md col-span-1 sm:col-span-2 md:col-span-1">
						<h3 className="text-center text-lg uppercase tracking-wide border-b-1 border-black py-2">
							© VEOveneht
						</h3>
						<p className="text-center text-xs">
							© {new Date().getFullYear()} veoveneht. All rights reserved.
						</p>
						<p className="text-center text-xs">
							Made by Lisan Shidqi Farizan
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
