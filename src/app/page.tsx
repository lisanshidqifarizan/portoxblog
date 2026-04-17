import { Metadata } from "next";
import Sidebar from "@/components/Homepage/Sidebar";
import Navigation from "@/components/Homepage/Navigation";
import Footer from "@/components/Homepage/Footer";
import Cards from "@/components/Homepage/Cards";
import { PostsProvider } from "@/context/Provider";

export const metadata: Metadata = {
	title: "Blog | VEOveneht",
};

export default function Home() {
	return (
		<>
			<Navigation />
			<main className="w-full flex justify-center bg-[#f2f6f8]">
				<div className="max-w-[1100px] h-full flex justify-between flex-col md:flex-row gap-4 p-4">
					<PostsProvider>
						<Cards />
						<Sidebar />
					</PostsProvider>
				</div>
			</main>
			<footer className="w-full flex justify-center bg-gray-100 border-t-2">
				<Footer />
			</footer>
		</>
	);
}
