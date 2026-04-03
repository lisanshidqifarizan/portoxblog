import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit | VEOveneht",
    description: "Edit web VEOveneht!",
    keywords: "veoveneht, VEOveneht, Veo Veneht, veo veneht, website, games, teknologi",
    authors: [{ name: "Lisan Shidqi Farizan", url: "https://veoveneht.eu.org" }],
};

import CEdit from "./Edit";

export default function Edit() {
    return (
        <Suspense fallback={<p className="text-center mt-6">Loading...</p>}>
            <CEdit />
        </Suspense>
    );
}