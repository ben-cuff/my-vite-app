import { useEffect, useState } from "react";
import parseForecaseData from "../utils/parse-forecast-data";
import "./App.css";
import Forecast from "./Forecast";
import SearchForm from "./SearchForm";

function App() {
	const [city, setCity] = useState("New York City");
	const [weatherData, setWeatherData] = useState(null);

	const onDataSubmit = (data) => {
		setCity(data);
	};

	useEffect(() => {
		if (city) {
			console.log("attempting API Call");
			(async () => {
				try {
					const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
					const response = await fetch(
						`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
					);
					if (!response.ok) {
						throw new Error("Failed to fetch weather data");
					}
					const data = await response.json();
					const parsedData = parseForecaseData(data);
					sflixsteretWeatherData(parsedData);
				} catch (error) {
					console.error(error);
				}
			})();
		}
	}, [city]);

	return (
		<div className="header-container">
			<h1 className="header">Weather Report</h1>
			<SearchForm onDataSubmit={onDataSubmit} />
			<p>📍 Location: {city ? city : ""}</p>
			<Forecast weatherData={weatherData} />
		</div>
	);
}

export default App;
