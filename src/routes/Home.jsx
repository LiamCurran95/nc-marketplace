import * as api from "../utils/api";
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import CategoryFilter from "../components/CategoryButton";
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
	const [items, setItems] = useState([]);
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// fetching all items
		api.fetchItemAll().then((data) => {
			setItems(data);
			setIsLoading(false);
		});

		// fetching categories
		api.fetchCategoryAll().then((data) => {
			setCategories(data);
		});
	}, []);

	if (isLoading) return <p>Loading...</p>;

	return (
		<main className="container">
			<div className="filter">
				{categories.map(({ category_name }) => {
					return (
						<CategoryFilter key={category_name} category_name={category_name} />
					);
				})}
			</div>
			<div className="grid">
				{items.map(({ item_id, item_name, img_url, price, category_name }) => {
					return (
						<ItemCard
							key={item_id}
							item_name={item_name}
							img_url={img_url}
							price={price}
							category_name={category_name}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default ItemList;
