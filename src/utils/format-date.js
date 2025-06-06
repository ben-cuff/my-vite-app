export default function formatDate(isoString) {
	const date = new Date(isoString.replace(" ", "T"));

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const weekday = days[date.getDay()];
	const month = months[date.getMonth()];
	const day = date.getDate();

	return `${weekday}, ${month} ${day}`;
}
