import * as api from "../utils/api";

const CategoryButton = ({ category_name }) => {
	return (
		<button onClick={() => api.fetchItemsByCategory(category_name)}>
			{category_name}
		</button>
	);
};

export default CategoryButton;
