import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login | VEOveneht",
	description: "Login web VEOveneht!",
	keywords:
		"veoveneht, VEOveneht, Veo Veneht, veo veneht, website, games, teknologi",
	authors: [
		{ name: "Lisan Shidqi Farizan", url: "https://veoveneht.eu.org/login" },
	],
};

import CLogin from "./Login";

export default function Login() {
	return (
		<>
			<CLogin />
		</>
	);
}
