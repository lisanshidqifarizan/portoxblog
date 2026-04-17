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
								I'm a web developer focused on modern application development
								using Next.js and React. I'm interested in building modular,
								fast, and responsive interfaces using approaches like
								Server-Side Rendering (SSR) and Static Site Generation (SSG). In
								addition to front-end development, I'm also exploring back-end
								development using MongoDB to efficiently manage data and build
								scalable systems. Currently, I'm continuing to develop my skills
								in full-stack development and am interested in Rust programming.
								For me, technology isn't just a tool, but also a medium for
								understanding and building systems that align logic, structure,
								and reality.
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
							<img src="/img/skills/rust.png" alt="" />
							<img src="/img/skills/github.png" alt="" />
							<img src="/img/skills/git.png" alt="" />
							<img src="/img/skills/vsc.png" alt="" />
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
										Building and developing a blog using Next.js (App Router)
										and React
									</li>
									<li>
										Implementing SSR and SSG for performance optimization and
										SEO
									</li>
									<li>
										Design and manage content structure for technical articles
										web development
									</li>
									<li>Integrate MongoDB as a database for data storage</li>
									<li>
										Managing deployments using Vercel and domain configuration
										with Cloudflare
									</li>
								</ul>
							</div>
						</div>
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
