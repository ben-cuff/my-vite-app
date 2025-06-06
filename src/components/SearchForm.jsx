import PropTypes from "prop-types";

export default function SearchForm({ onDataSubmit }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const submittedData = event.target.elements.dataInput.value;
		onDataSubmit(submittedData);
	};
	
	return (
		<form onSubmit={handleSubmit} className="search-form">
			<input
				className="search-input-city"
				placeholder="enter city name here"
				name="dataInput"
			/>
			<button type="submit" className="search-btn">
				Submit
			</button>
		</form>
	);
}

SearchForm.propTypes = {
	onDataSubmit: PropTypes.func.required,
};
