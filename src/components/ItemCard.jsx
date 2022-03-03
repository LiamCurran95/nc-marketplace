const ItemCard = ({ item_id, item_name, img_url, price, category_name }) => {
  return (
    <article>
      <img src={img_url} alt={item_name} />
      <h3>${price}</h3>
      <p>{item_name}</p>
      <p>{category_name}</p>
    </article>
  );
};

export default ItemCard;
