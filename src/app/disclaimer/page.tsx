import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Disclaimer | VEOveneht",
	description: "Disclaimer web VEOveneht!",
	keywords:
		"veoveneht, VEOveneht, Veo Veneht, veo veneht, website, games, teknologi",
	authors: [
		{
			name: "Lisan Shidqi Farizan",
			url: "https://veoveneht.eu.org/disclaimer",
		},
	],
};

export default function Disclaimer() {
	return (
		<main className="w-full h-[100vh] flex justify-center items-center">
			<div className="max-w-4xl p-6 bg-yellow-100 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
				<h1 className="text-4xl font-extrabold mb-4 border-b-2 text-black">
					Disclaimer
				</h1>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">1. Content & Information</h2>
					<p className="text-base leading-relaxed">
						All content in <strong>veoveneht.eu.org</strong> provided for
						informational and entertainment purposes. We strive to provide
						accurate information, but do not guarantee the completeness or
						reliability of the content.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">2. Guides & Tutorials</h2>
					<p className="text-base leading-relaxed">
						The tutorials & guides here are personal opinions or experimental
						results. Results may vary from user to user. Use your own judgment
						before trying.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">3. Third Party Content</h2>
					<p className="text-base leading-relaxed">
						We may include links to external sites. We are not responsible for
						the content or privacy policies outside of this website.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">4. Copyright</h2>
					<p className="text-base leading-relaxed">
						All content & images are property of veoveneht, unless otherwise
						stated. If you feel there is a copyright infringement, please
						contact us.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-bold mb-2">5. Change</h2>
					<p className="text-base leading-relaxed">
						This page may be updated from time to time. Please check back
						periodically to see the latest changes.
					</p>
				</section>

				<div className="mt-10 border-t-2 border-black pt-4 text-sm text-gray-700">
					If you have any questions, please contact us via the page{" "}
					<a href="/contact" className="text-blue-600 underline">
						Contact
					</a>
					.
				</div>
			</div>
		</main>
	);
}
