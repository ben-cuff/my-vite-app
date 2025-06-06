export default function kelvinToFahrenheit(kelvin) {
	return (1.8 * (kelvin - 273) + 32).toFixed(2).toString();
}
