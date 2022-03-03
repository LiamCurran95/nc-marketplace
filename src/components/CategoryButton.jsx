import { Link } from "react-router-dom";

const CategoryButton = ({ category_name }) => {
  return (
    <button>
      <Link to={`/items?category_name=${category_name}`}>{category_name}</Link>
    </button>
  );
};

export default CategoryButton;
