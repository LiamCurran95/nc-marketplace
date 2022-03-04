import * as api from "../utils/api";
import CategoryFilter from "../components/CategoryButton";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api.fetchCategoryAll().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <nav className="Navbar">
      <div className="filter">
        {categories.map(({ category_name }) => {
          return (
            <CategoryFilter key={category_name} category_name={category_name} />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
