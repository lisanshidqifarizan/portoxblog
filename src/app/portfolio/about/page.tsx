import { Metadata } from "next";
import {
	PortfolioNavigation,
	PortfolioFooter,
} from "@/components/PortfolioComponents";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About | Lisan Shidqi Farizan",
};

export default function About() {
	return (
		<>
			<PortfolioNavigation />
			<main className="flex justify-center">
				<div className="max-w-[1440px] w-full flex flex-col my-12 px-6 gap-4 text-white">
					<div className="flex mx-36 gap-4">
						<div className="flex items-center justify-center">
							<img className="rounded-full" src="/img/lisan.png" />
						</div>
						<div>
							<h1>BIOGRAPHY</h1>
							<p>
								I'm a web developer focused on building modern, performant web
								applications using Next.js and React. I have experience in
								developing full-stack systems with MongoDB, implementing
								SSR/SSG, and optimizing applications for performance and SEO.
							</p>
						</div>
					</div>
					<div>
						<h1>SKILLS & TOOLS</h1>
						<div className="grid grid-cols-5 place-content-center place-items-center gap-2">
							<img src="/img/skills/html.png" alt="" />
							<img src="/img/skills/css.png" alt="" />
							<img src="/img/skills/js.png" alt="" />
							<img src="/img/skills/next.png" alt="" />
							<img src="/img/skills/mongodb.png" alt="" />
							<img src="/img/skills/rust.png" alt="" />
							<img src="/img/skills/github.png" alt="" />
							<img src="/img/skills/git.png" alt="" />
							<img src="/img/skills/vsc.png" alt="" />
							<img src="/img/skills/tiptap.png" alt="" />
							<img src="/img/skills/cloudinary.png" alt="" />
						</div>
					</div>
					<div>
						<h1>EXPERIENCE</h1>
						<div className="grid grid-cols-2 place-content-center place-items-center gap-2">
							<div>
								<h4 className="font-semibold">Personal Developer Blog</h4>
								<Link
									href="https://veoveneht.eu.org/"
									className="underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									veoveneht.eu.org/
								</Link>

								<ul className="list-disc ml-5">
									<li>
										Built a full-stack developer blog using Next.js (App Router)
										with MongoDB as the primary database, integrating Tiptap for
										rich text editing and Cloudinary for media management.
									</li>
									<li>
										Implemented dynamic routing and server-side rendering
										(SSR/SSG) to improve performance and SEO.
									</li>
									<li>
										Designed and structured a scalable content system for
										technical articles, including categorization and dynamic
										content rendering.
									</li>
									<li>
										Developed RESTful API routes for managing blog data (CRUD
										operations).
									</li>
									<li>
										Deployed the application using Vercel and configured domain
										management and CDN optimization via Cloudflare.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<h1>EDUCATION</h1>

						<div>
							<h4 className="font-semibold">
								Bachelor's Degree in Informatics Engineering
							</h4>
							<p>ARS University, Bandung</p>
							<p>2023 – Present</p>
						</div>

						<div className="mt-2">
							<h4 className="font-semibold">
								Vocational High School (Business Management)
							</h4>
							<p>SMKS 45 Lembang</p>
							<p>Graduated: 2022</p>
						</div>
					</div>
				</div>
			</main>
			<PortfolioFooter />
		</>
	);
}
