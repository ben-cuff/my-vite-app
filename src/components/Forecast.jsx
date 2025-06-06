import data from "../data/data";
import parseForecastData from "../utils/parse-forecast-data";
import Day from "./Day";

export default function Forecast() {
	const weatherData = parseForecastData(data);
	return (
		<div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
			{weatherData.map((weather) => (
				<Day
					day={weather.date}
					weather={weather.weather}
					temperature={weather.temperature}
					icon={weather.icon}
				/>
			))}
		</div>
	);
}
