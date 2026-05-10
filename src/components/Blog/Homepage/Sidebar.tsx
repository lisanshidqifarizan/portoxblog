import { SupportCard, Tags } from "./Sidebar/Sidebar";
import { AdsBox } from "./Sidebar/Ads";

export default function Sidebar() {
	return (
		<div className="sticky top-4 w-full md:max-w-[300px] w-fit h-fit">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:flex md:flex-col">
				<SupportCard />
				<Tags />
				<AdsBox />
			</div>
		</div>
	);
}
