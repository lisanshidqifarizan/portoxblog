import type { Metadata } from "next";
import { AuthProvider } from "@/context/Provider";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Lisan Shidqi Farizan",

	icons: {
		icon: "/img/favicon.png",
	},
};

const mplus = M_PLUS_Rounded_1c({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			<head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
				/>
			</head>
			<body
				className={`${mplus.className} min-h-full flex flex-col justify-center`}
			>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
