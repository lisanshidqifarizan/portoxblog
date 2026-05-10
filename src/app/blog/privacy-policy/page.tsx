import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | VEOveneht",
	description: "Privacy Policy web VEOveneht!",
	keywords:
		"veoveneht, VEOveneht, Veo Veneht, veo veneht, website, games, teknologi",
	authors: [
		{
			name: "Lisan Shidqi Farizan",
			url: "https://veoveneht.eu.org/privacy-policy",
		},
	],
};

export default function PrivacyPolicy() {
	return (
		<main className="w-full h-[250vh] flex justify-center items-center">
			<div className="max-w-4xl p-6 bg-white border-4 border-black shadow-[6px_6px_0_0_#000]">
				<h1 className="text-4xl font-extrabold text-black mb-2 border-b-2">
					Privacy Policy
				</h1>
				<p className="text-sm text-gray-600 mb-6">
					Last updated: April 15, 2025
				</p>

				<p className="mb-4">
					This Privacy Policy describes Our policies and procedures on the
					collection, use and disclosure of Your information when You use the
					Service and tells You about Your privacy rights and how the law
					protects You.
				</p>

				<p className="mb-4">
					We use Your Personal data to provide and improve the Service. By using
					the Service, You agree to the collection and use of information in
					accordance with this Privacy Policy.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-3 border-b-2 border-black inline-block">
					Interpretation and Definitions
				</h2>
				<h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
				<p className="mb-4">
					The words of which the initial letter is capitalized have meanings
					defined under the following conditions...
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">Definitions</h3>
				<ul className="list-disc list-inside space-y-2 mb-6">
					<li>
						<strong>Account</strong>: a unique account created for You to access
						our Service.
					</li>
					<li>
						<strong>Affiliate</strong>: an entity that controls, is controlled
						by or is under common control...
					</li>
					<li>
						<strong>Company</strong>: refers to veoveneht.
					</li>
					<li>
						<strong>Cookies</strong>: small files stored on Your device.
					</li>
					<li>
						<strong>Country</strong>: refers to United Kingdom.
					</li>
					<li>
						<strong>Device</strong>: any device like a computer, cellphone, or
						tablet.
					</li>
					<li>
						<strong>Personal Data</strong>: info related to an identified
						individual.
					</li>
					<li>
						<strong>Service</strong>: refers to the Website.
					</li>
					<li>
						<strong>Website</strong>: veoveneht,{" "}
						<a
							href="https://veoveneht.eu.org/"
							className="underline text-blue-600"
							target="_blank"
						>
							https://veoveneht.eu.org/
						</a>
					</li>
					<li>
						<strong>You</strong>: the user or entity using the Service.
					</li>
				</ul>

				<h2 className="text-2xl font-bold mt-8 mb-3 border-b-2 border-black inline-block">
					Collecting and Using Your Personal Data
				</h2>
				<h3 className="text-xl font-semibold mt-4 mb-2">
					Types of Data Collected
				</h3>
				<h4 className="text-lg font-bold mt-2">Personal Data</h4>
				<p className="mb-2">
					We may collect personally identifiable information including:
				</p>
				<ul className="list-disc list-inside mb-6 space-y-1">
					<li>Email address</li>
					<li>Full name</li>
					<li>Usage Data</li>
				</ul>

				<h4 className="text-lg font-bold mt-2">Usage Data</h4>
				<p className="mb-4">
					Includes info like IP address, browser type, pages visited, time/date,
					etc.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">
					Information from Third-Party Services
				</h3>
				<p className="mb-4">
					We may collect data from services like Google, Facebook, Instagram,
					Twitter, LinkedIn.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">
					Tracking Technologies and Cookies
				</h3>
				<ul className="list-disc list-inside mb-6 space-y-2">
					<li>
						<strong>Cookies</strong>: small files to remember user activity.
					</li>
					<li>
						<strong>Web Beacons</strong>: used in emails or site pages to track
						behavior.
					</li>
				</ul>

				<p className="mb-4">
					You can manage cookies in your browser settings. Learn more on{" "}
					<a
						href="https://www.termsfeed.com//cookies/#What_Are_Cookies"
						target="_blank"
						className="underline text-blue-600"
					>
						TermsFeed
					</a>
					.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">
					Use of Your Personal Data
				</h3>
				<ul className="list-disc list-inside space-y-2 mb-6">
					<li>To provide and maintain our Service</li>
					<li>To manage Your Account</li>
					<li>To contact You</li>
					<li>To send news and offers</li>
					<li>For business transfers</li>
					<li>For analytics and improvements</li>
				</ul>

				<h3 className="text-xl font-semibold mt-6 mb-2">Sharing of Data</h3>
				<p className="mb-4">
					We may share Your personal info with service providers, business
					partners, or with your consent.
				</p>

				<h3 className="text-xl font-semibold mt-6 mb-2">
					Retention & Deletion
				</h3>
				<p className="mb-4">
					We keep data only as long as needed. You may request deletion or
					access anytime via your account or contacting us.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-3 border-b-2 border-black inline-block">
					Children's Privacy
				</h2>
				<p className="mb-4">
					We do not collect data from children under 13 knowingly. If found,
					such data will be deleted immediately.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-3 border-b-2 border-black inline-block">
					Contact Us
				</h2>
				<p>
					Email:{" "}
					<a
						href="mailto:veoveneht@gmail.com?subject=What%20subject%3F&body=Fill%20this%20with%20your%20message"
						className="underline text-blue-600"
					>
						veoveneht@gmail.com
					</a>
				</p>
				<p>
					Contact page:{" "}
					<a
						href="https://veoveneht.eu.org/contact"
						target="_blank"
						rel="noopener noreferrer"
						className="underline text-blue-600"
					>
						veoveneht.eu.org/contact
					</a>
				</p>
			</div>
		</main>
	);
}
