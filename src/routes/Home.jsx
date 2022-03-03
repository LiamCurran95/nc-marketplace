import * as api from "../utils/api";
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { category_name } = useParams();

	useEffect(() => {
		if (!category_name) {
			api.fetchItemAll().then((data) => {
				setItems(data);
				setIsLoading(false);
			});
		} else {
			api.fetchItemsByCategory(category_name).then((data) => {
				setItems(data);
				setIsLoading(false);
			});
		}
	}, [category_name]);

	if (isLoading) return <p>Loading...</p>;
	return (
		<main className="container">
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
