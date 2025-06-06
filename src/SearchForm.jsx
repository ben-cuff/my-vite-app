import { useState } from "react";

export default function SearchForm() {
	const [cityInput, setCityInput] = useState("");
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				console.log(cityInput);
				setCityInput("");
			}}
			className="search-form"
		>
			<input
				className="search-input-city"
				placeholder="enter city name here"
				value={cityInput}
				onChange={(e) => setCityInput(e.target.value)}
			/>
			<button type="submit" className="search-btn">
				Submit
			</button>
		</form>
	);
}
