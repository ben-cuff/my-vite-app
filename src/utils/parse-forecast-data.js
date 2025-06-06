import formatDate from "./format-date";
import kelvinToFahrenheit from "./temp-conversion";

export default function parseForecastData(data) {
	const weatherInfo = data.list.map((weather) => {
		return {
			date: formatDate(weather.dt_txt),
			temperature: kelvinToFahrenheit(weather.main.temp),
			weather: weather.weather[0].main,
			description: weather.weather[0].description,
			icon: weather.weather[0].icon,
		};
	});

	console.log(weatherInfo);

	return weatherInfo;
}
