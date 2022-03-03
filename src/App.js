import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";


function App() {
	return (
		<div className="App">
			<Header />
			<Navbar />
			<ItemList />
			<Footer />
		</div>
	);
}

export default App;
