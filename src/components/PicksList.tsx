import { useSelector } from "react-redux";
import { selectPicks } from "../../store/randomizer";

export function PicksList(props) {
	const picks = useSelector(selectPicks);
	return (
		<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
			{picks.map((p, idx) => (
				<h1 className="title-font font-medium text-3xl text-white" key={idx}>
					{p}
				</h1>
			))}
		</div>
	);
}
