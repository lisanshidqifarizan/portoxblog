import { useEffect } from "react";

export default function AdsBanner() {
	useEffect(() => {
		try {
			(window as any).adsbygoogle.push({});
		} catch (e) {}
	}, []);

	return (
		<ins
			className="adsbygoogle"
			style={{ display: "block" }}
			data-ad-client="ca-pub-9011893833126307"
			data-ad-slot="YOUR_SLOT_ID"
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	);
}
