import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import ListItem from "./routes/ListItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories/:category_name" element={<Home />} />
          <Route path="/sellitem" element={<ListItem />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
