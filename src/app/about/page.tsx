import { Metadata } from "next";
import {
	PortfolioNavigation,
	PortfolioFooter,
} from "@/components/PortfolioComponents";

export const metadata: Metadata = {
	title: "About | Lisan Shidqi Farizan",
};

export default function About() {
	return (
		<>
			<PortfolioNavigation />
			<main className="flex justify-center">
				<div className="flex flex-col gap-32 text-white">
					<div className="flex gap-4">
						<div>
							<img className="rounded-full" src="/img/lisan.png" />
						</div>
						<div>
							<h1>BIOGRAPHY</h1>
							<p>Text</p>
						</div>
					</div>
					<div>
						<h1>SKILLS</h1>
					</div>
					<div>
						<h1>EXPERIENCE</h1>
					</div>
					<div>
						<h1>EDUCATION</h1>
					</div>
				</div>
			</main>
			<PortfolioFooter />
		</>
	);
}
