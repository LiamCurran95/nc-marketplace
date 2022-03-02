import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
	return (
		<div className="App">
			<Header />
			<Menu />
			<div className="Main">{/* insert stuff here */}</div>
			<Footer />
		</div>
	);
}

export default App;
