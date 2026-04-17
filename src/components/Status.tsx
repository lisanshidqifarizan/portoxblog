import Link from "next/link";

export const Notification = ({ message }: { message: string }) => {
	return (
		<div>
			<p>{message}</p>
		</div>
	);
};

export const LoadingComponent = () => {
	return (
		<div className="flex-col gap-4 w-full h-[80vh] flex items-center justify-center">
			<div className="relative w-[752px] h-[3px] bg-gradient-to-r from-transparent via-black to-transparent overflow-hidden">
				<div className="absolute translate-x-[0px] w-[50px] h-full bg-gradient-to-r from-transparent via-white to-transparent animate-slide"></div>
			</div>
		</div>
	);
};
export const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6">
			<div className="border-4 border-black p-10 shadow-[6px_6px_0px_#000] bg-yellow-100 text-center max-w-xl w-full">
				<h1 className="text-6xl font-extrabold mb-4">404</h1>
				<h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
				<p className="mb-6 text-gray-800">
					Oops! Sepertinya halaman yang kamu cari tidak tersedia.
				</p>
				<Link
					href="/"
					className="inline-block px-6 py-2 bg-black text-white border-2 border-black hover:bg-yellow-300 hover:text-black shadow-[3px_3px_0px_#000] transition-all"
				>
					⬅️ Kembali ke Beranda
				</Link>
			</div>
		</div>
	);
};
