import * as api from "../utils/api";

const ItemCard = ({ item_id, item_name, img_url, price, category_name }) => {
	return (
		<article className="itemCard">
			<div className="itemCard_thumbnail">
				<img src={img_url} alt={item_name} />
			</div>
			<div className="itemCard_info">
				<p className="name">
					<a href="#">{item_name}</a>
				</p>
				<p className="category">{category_name}</p>
				<div className="price">${price}</div>
				<button
					onClick={(item_id) => {
						api.deleteItem(item_id);
					}}
				>
					Remove this listing
				</button>
			</div>
		</article>
	);
};

export default ItemCard;
