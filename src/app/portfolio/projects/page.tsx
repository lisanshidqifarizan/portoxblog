import { Metadata } from "next";
import Link from "next/link";
import {
	PortfolioNavigation,
	PortfolioFooter,
} from "@/components/PortfolioComponents";

export const metadata: Metadata = {
	title: "Projects | Lisan Shidqi Farizan",
};

export default function Projects() {
	return (
		<div className="porto-style">
			<PortfolioNavigation />

			<main className="flex justify-center min-h-[81.8vh] text-white">
				<div>
					<h1 className="text-2xl font-bold mb-6">Projects</h1>

					<div className="relative w-full max-w-[300px] overflow-hidden group rounded-lg">
						<img
							src="/img/projects/web-blog.png"
							className="w-full object-cover opacity-80 transition duration-1000 ease-in-out group-hover:scale-110"
						/>

						<div className="absolute bottom-10 left-0 w-full bg-white/90 backdrop-blur-sm text-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out rotate-[-5deg]">
							<Link
								href="https://veoveneht.eu.org/"
								className="text-black block p-3 font-medium"
							>
								Personal Blog
							</Link>
						</div>
					</div>
				</div>
			</main>

			<PortfolioFooter />
		</div>
	);
}
