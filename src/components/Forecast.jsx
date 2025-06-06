import PropTypes from "prop-types";
import Day from "./Day";

export default function Forecast({ weatherData }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-around",
				flexWrap: "wrap",
			}}
		>
			{weatherData ? (
				weatherData.map((weather) => (
					<Day
						day={weather.date}
						weather={weather.weather}
						temperature={weather.temperature}
						icon={weather.icon}
					/>
				))
			) : (
				<h3>Loading</h3>
			)}
		</div>
	);
}

Forecast.PropTypes = {
	weatherData: PropTypes.object,
};
