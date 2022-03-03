import { useParams } from "react-router-dom";

export default function SingleCategory() {
	const { category_name } = useParams();
	return <h2>{category_name} view</h2>;
}
