import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import SingleCategory from "./routes/SingleCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Home />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={`/items?category_name=:category_name}`}
            element={<SingleCategory />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
