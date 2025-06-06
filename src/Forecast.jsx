import Day from "./Day";

export default function Forecast() {
	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			<Day day="Thu, Mar 14" weather="Clouds" temperature={57.34} />
			<Day day="Fri, Mar 15" weather="Rain" temperature={60.11} />
			<Day day="Sat, Mar 16" weather="Clouds" temperature={55.45} />
			<Day day="Sun, Mar 17" weather="Clouds" temperature={57.89} />
		</div>
	);
}
