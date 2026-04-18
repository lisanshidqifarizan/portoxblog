import Image from "next/image";
import Link from "next/link";
import {
	PortfolioNavigation,
	PortfolioFooter,
} from "@/components/PortfolioComponents";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio | Lisan Shidqi Farizan",
	description: "Portfolio web VEOveneht!",
	keywords:
		"veoveneht, VEOveneht, Veo Veneht, veo veneht, website, games, teknologi,lisan shidqi farizan, Lisan Shidqi Farizan, LISAN SHIDQI FARIZAN, LISAN, lisan, Lisan",
	authors: [
		{ name: "Lisan Shidqi Farizan", url: "https://veoveneht.eu.org/portfolio" },
	],
};

export default function Home() {
	return (
		<div className="porto-style">
			<PortfolioNavigation />
			<main className="flex justify-center text-white min-h-[81.8vh]">
				<div className="max-w-[1440px] w-full flex my-26 px-6">
					<div className="w-1/2 flex justify-center items-center">
						<Image
							src="/img/favicon.png"
							alt="Logo"
							width={700}
							height={700}
							className="w-full max-w-[600px] object-contain"
						/>
					</div>

					<div className="w-1/2 flex flex-col justify-center gap-4">
						<p className="text-4xl font-bold">
							Realize Everything You Think With Logic And Syntax.
						</p>
						<p className="text-[1.2rem]">
							As a full-stack developer, I am dedicated to turning ideas into
							innovative web applications. Explore my latest projects,
							showcasing my work in NextJS and web development.
						</p>
						<Link
							download
							href="/files/Resume-Lisan_Shidqi_Farizan.pdf"
							className="w-fit bg-white rounded-lg p-4 text-black text-[1.3rem]"
						>
							Resume
							<span className="material-symbols-outlined">open_in_new</span>
						</Link>
					</div>
				</div>
			</main>
			<PortfolioFooter />
		</div>
	);
}
