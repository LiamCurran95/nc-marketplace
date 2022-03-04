// import * as api from "../utils/api";
// import { useState } from "react";

// const RemoveListing = () => {
// 	const [item_id, setItem_id] = useState("");
// 	async function handleSubmit(e) {
// 		e.preventDefault();

// 		const existingItems = await api.fetchItemAll();
// 		const itemToDelete = { item_id };

// 		if (existingItems.includes({ item_id: itemToDelete.item_id })) {
// 			api.deleteItem(item_id);
// 		} else {
// 			return <h1>This item doesn't exist</h1>;
// 		}
// 	}
// 	return (
// 		<div className="container">
// 			<h1>Remove a listing</h1>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="item_id">Item ID to be removed</label>
// 				<input
// 					type="number"
// 					value={item_id}
// 					onChange={(e) => setItem_id(e.target.value)}
// 				></input>
// 				<button type="submit" className="submit">
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// export default RemoveListing;
