import * as api from "../utils/api";
import { useState } from "react";

const ListItem = () => {
	const [item_name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [img_url, setImage] = useState("");
	const [price, setPrice] = useState("");
	const [category_name, setCategory] = useState("Uncategorized");

	async function handleSubmit(e) {
		e.preventDefault();

		const existingCategories = await api.fetchCategoryAll();
		const newListing = {
			item_name,
			description,
			img_url,
			price,
			category_name,
		};
		newListing.price = +newListing.price;

		if (
			existingCategories.includes({ category_name: newListing.category_name })
		) {
			api.postItem(newListing);
		} else {
			api.postCategory(newListing.category_name);
			api.postItem(newListing);
		}
	}

	return (
		<div className="container">
			<h1>Sell your items via the form below</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="item_name">Item Name</label>
				<input
					type="text"
					value={item_name}
					onChange={(e) => setName(e.target.value)}
				></input>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></input>
				<label htmlFor="image_url">Image</label>
				<input
					type="text"
					value={img_url}
					onChange={(e) => setImage(e.target.value)}
				></input>
				<label htmlFor="price">Price</label>
				<input
					type="number"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				></input>
				<label htmlFor="category_name">Category</label>
				<input
					type="text"
					value={category_name}
					onChange={(e) => setCategory(e.target.value)}
				></input>
				<button type="submit" className="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ListItem;
