import PropTypes from "prop-types";
import "./Day.css";

export default function Day({ day, weather, temperature, icon }) {
	return (
		<div className="day-container">
			<h3>{day}</h3>
			<img
				className="weather-icon"
				src={`http://openweathermap.org/img/wn/${icon}.png`}
				alt={weather}
			/>

			<p className="sub-weather">{weather}</p>
			<p
				className="temperature"
				style={{ color: temperature >= 60 ? "orange" : "blue" }}

			>
				{temperature}
			</p>
		</div>
	);
}

Day.propTypes = {
	day: PropTypes.string.isRequired,
	weather: PropTypes.string.isRequired,
	temperature: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};
