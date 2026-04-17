import Link from "next/link";

export default function Footer() {
	return (
		<div className="w-[1440px] px-6 py-10 sm:px-8 md:px-10 lg:px-12 xl:px-16">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black font-bold">
				{/* Navigasi */}
				<div className="flex flex-col gap-2 bg-white shadow-sm">
					<h3 className="text-center text-lg tracking-wide uppercase border-b-1 border-black py-2">
						Navigasi
					</h3>
					<ul className="grid grid-cols-2 gap-2 text-sm px-2 pb-2">
						<li>
							<Link href="/" className="hover:underline">
								| Home
							</Link>
						</li>
						<li>
							<Link href="/disclaimer" className="hover:underline">
								| Disclaimer
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:underline">
								| Contact
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:underline">
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
							<Link href="/faq" className="hover:underline">
								| FAQ
							</Link>
						</li>
						<li>
							<Link href="/sitemap" className="hover:underline">
								| Sitemap
							</Link>
						</li>
						<li>
							<Link href="/privacy-policy" className="hover:underline">
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
						Made with ❤️ by Lisan Shidqi Farizan
					</p>
				</div>
			</div>
		</div>
	);
}
