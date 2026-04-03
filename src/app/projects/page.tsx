import { Metadata } from "next";
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
			<main className="flex justify-center">
				<h1>Projects</h1>
			</main>
		</>
	);
}
