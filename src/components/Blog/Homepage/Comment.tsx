export default function Comment() {
    return (

        <div className="w-full max-w-4xl bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6">
            <h2 className="text-2xl font-bold text-black mb-4">💬 Tinggalkan Komentar</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Komentar berhasil dikirim! (simulasi)");
                }}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="Nama Anda"
                    required
                    className="p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600"
                />
                <textarea
                    placeholder="Tulis komentar..."
                    rows={4}
                    required
                    className="p-3 border-2 border-black rounded bg-gray-100 text-black placeholder-gray-600"
                />
                <button
                    type="submit"
                    className="bg-yellow-300 border-2 border-black text-black font-bold px-4 py-2 rounded shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 w-fit"
                >
                    Kirim Komentar
                </button>
            </form>
        </div>
    )
}