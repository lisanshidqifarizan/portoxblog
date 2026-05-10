import type { Metadata } from "next";
import Script from "next/script";
import { AuthProvider } from "@/context/Provider";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Lisan Shidqi Farizan | Frontend & Fullstack Developer (Next.js, React, TypeScript)",
	description: "Portfolio Lisan Shidqi Farizan, Frontend & Fullstack Developer yang fokus pada pengembangan web modern menggunakan Next.js, React, TypeScript, dan MongoDB.",
	keywords: [
		"Lisan Shidqi Farizan",
		"Frontend Developer",
		"Fullstack Developer",
		"Next.js",
		"React",
		"TypeScript",
		"MongoDB",
		"Web Developer Indonesia"
	],
	authors: [
		{ name: "Lisan Shidqi Farizan", url: "https://veoveneht.eu.org/" },
	],
	icons: {
		icon: "/img/logo-med.png",
	},
	openGraph: {
		title: "Lisan Shidqi Farizan | Web Developer",
		description: "Portfolio Lisan Shidqi Farizan, Frontend & Fullstack Developer.",
		url: "https://veoveneht.eu.org/",
		siteName: "Lisan Portfolio",
		images: [
		{
			url: "/img/lisan.png",
			width: 1200,
			height: 630,
		},
		],
		locale: "id_ID",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
	canonical: "https://veoveneht.eu.org/",
	}
};

const firasans = Fira_Sans({
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
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-KN2QD3WWYK"
					strategy="afterInteractive"
				></Script>
				<Script id="google-analytics" strategy="afterInteractive">
					{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-KN2QD3WWYK');`}
				</Script>
				<meta name="google-adsense-account" content="ca-pub-9011893833126307" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
				/>
			</head>
			<body
				className={`${firasans.className} min-h-full flex flex-col justify-center`}
			>
				<AuthProvider>{children}</AuthProvider>

				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9011893833126307"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				></Script>
			</body>
		</html>
	);
}
