export default function FAQ() {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000]">
            <h1 className="text-4xl font-extrabold mb-6 text-black">❓ Frequently Asked Questions</h1>

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-black">What is VEOveneht?</h2>
                    <p className="text-base text-gray-800">
                        VEOveneht is a site that provides content about coding tutorials, game news, the latest technology, and other interesting articles.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-black">Is the content free?</h2>
                    <p className="text-base text-gray-800">
                        Yes! All content is free to access without any subscription.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-black">Can I contribute?</h2>
                    <p className="text-base text-gray-800">
                        Of course! You can submit articles or tutorials through the page <a href="/contact" className="text-blue-600 underline">Contact</a>.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-black">Does VEOveneht accept collaborations or sponsorships?</h2>
                    <p className="text-base text-gray-800">
                        We are open to collaborations and sponsorships. Please contact us directly for a quote or more information.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-black">How do I find a specific post?</h2>
                    <p className="text-base text-gray-800">
                        You can use the search feature on the main page or go directly to the appropriate category such as Games, Tutorials, or Technology.
                    </p>
                </div>
            </div>

            <footer className="mt-10 border-t-2 border-black pt-4 text-sm text-gray-700">
                Still have questions? Contact us via <a href="/contact" className="text-blue-600 underline">contact form</a>.
            </footer>
        </div>
    );
}