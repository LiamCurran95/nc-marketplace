import { useParams } from "react-router-dom";

export default function SingleCategory() {
  const category = useParams();
  return <h2>{category} view</h2>;
}
