import axios from "axios";

const mcAPI = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api/",
});

export function fetchItemAll() {
  return mcAPI.get("/items").then(({ data: { items } }) => {
    return items;
  });
}

export function fetchCategoryAll() {
  return mcAPI.get("/categories").then(({ data: [categories] }) => {
    return categories;
  });
}
