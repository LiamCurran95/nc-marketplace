import axios from "axios";

const mcAPI = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api/",
});

export function fetchItemAll() {
  return mcAPI.get("/items").then(({ data: { items } }) => {
    return items;
  });
}

export function fetchItemsByCategory(category_name) {
  return mcAPI
    .get(`/items?category_name=${category_name}`)
    .then(({ data: { items } }) => {
      return items;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchCategoryAll() {
  return mcAPI.get("/categories").then(({ data: { categories } }) => {
    return categories;
  });
}

export function postItem({
  item_name,
  description,
  image_url,
  price,
  category_name,
}) {
  return mcAPI
    .post("/api/items/", {
      item_name: item_name,
      description: description,
      image_url: image_url,
      price: price,
      category_name: category_name,
    })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

export function postCategory({ category_name }) {
  return mcAPI
    .post("/api/categories", {
      category_name: category_name,
    })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}
