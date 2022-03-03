import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Header />
			<Navbar />
			<div className="Main">{/* insert stuff here */}</div>
			<Footer />
		</div>
	);
}

export default App;
