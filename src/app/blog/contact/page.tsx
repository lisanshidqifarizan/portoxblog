import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | VEOveneht",
	description: "Contact web VEOveneht!",
	keywords:
		"veoveneht, VEOveneht, Veo Veneht, veo veneht, website, games, teknologi",
	authors: [
		{ name: "Lisan Shidqi Farizan", url: "https://veoveneht.eu.org/contact" },
	],
};

export default function Contact() {
	return (
		<main className="w-full h-[100vh] flex justify-center items-center">
			<div className="max-w-2xl p-6 bg-white border-4 border-black shadow-[6px_6px_0_0_#000]">
				<h1 className="text-4xl font-extrabold text-black mb-4 border-b-2">
					Contact Us
				</h1>

				<p className="text-gray-800 mb-6">
					Have questions, suggestions, or want to collaborate? Send us your
					message using the form below. We will respond as soon as possible!
				</p>

				<form className="flex flex-col gap-4">
					<label className="flex flex-col">
						<span className="font-bold text-black mb-1">Name</span>
						<input
							type="text"
							placeholder="Your Name"
							className="border-2 border-black p-2 bg-gray-100 text-black shadow-[4px_4px_0px_#000] focus:outline-none"
						/>
					</label>

					<label className="flex flex-col">
						<span className="font-bold text-black mb-1">Email</span>
						<input
							type="email"
							placeholder="you@example.com"
							className="border-2 border-black p-2 bg-gray-100 text-black shadow-[4px_4px_0px_#000] focus:outline-none"
						/>
					</label>

					<label className="flex flex-col">
						<span className="font-bold text-black mb-1">Message</span>
						<textarea
							rows={5}
							placeholder="Your message here..."
							className="border-2 border-black p-2 bg-gray-100 text-black shadow-[4px_4px_0px_#000] focus:outline-none"
						></textarea>
					</label>

					<button
						type="submit"
						className="bg-yellow-300 text-black font-bold py-2 px-4 border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-yellow-400 transition-all"
					>
						Send Message
					</button>
				</form>
			</div>
		</main>
	);
}
