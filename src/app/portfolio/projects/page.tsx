import { Metadata } from "next";
import Link from "next/link";
import {
	PortfolioNavigation,
	PortfolioFooter,
} from "@/components/PortfolioComponents";

export const metadata: Metadata = {
	title: "Project | Lisan Shidqi Farizan",
};

export default function Projects() {
	return (
		<>
			<PortfolioNavigation />
			<main className="flex justify-center h-[81vh] text-white">
				<div>
					<h1>Projects</h1>
					<div className="static w-full max-w-[300px]">
						<img src="/img/projects/web-blog.png" />
						<div className="absolute">
							<Link href="https://veoveneht.eu.org/">Personal Blog</Link>
						</div>
					</div>
				</div>
			</main>
			<PortfolioFooter />
		</>
	);
}
