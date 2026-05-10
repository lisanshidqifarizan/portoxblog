"use client";
// * CookieBanner.tsx
import Script from "next/script";

export const CookieBanner = () => {
	return (
		<Script
			id="Cookiebot"
			src="https:/consent.cookiebot.com/uc.js"
			data-cbid="8be92394-9779-47d9-bf86-80466ad9fec0"
			strategy="afterInteractive"
		/>
	);
};

// * GoogleAnalytic.tsx
export const GoogleAnalytic = () => {
	return (
		<>
			<Script
				async
				src="https:/www.googletagmanager.com/gtag/js?id=G-KN2QD3WWYK"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KN2QD3WWYK');
        `}
			</Script>
		</>
	);
};
