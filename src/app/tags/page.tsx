import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tags | VEOveneht",
	description: "Tags web VEOveneht!",
	keywords:
		"veoveneht, VEOveneht, Veo Veneht, veo veneht, website, games, teknologi",
	authors: [
		{ name: "Lisan Shidqi Farizan", url: "https://veoveneht.eu.org/tags" },
	],
};

import CTags from "./[tag]/page";

export default function Tags() {
	return (
		<Suspense fallback={<p className="text-center mt-6">Loading...</p>}>
			<CTags />
		</Suspense>
	);
}
