import "./App.css";
import Forecast from "./Forecast";
import SearchForm from "./SearchForm";

function App() {
	return (
		<div className="header-container">
			<h1 className="header">Weather Report</h1>
			<SearchForm />
			<Forecast />
		</div>
	);
}

export default App;
