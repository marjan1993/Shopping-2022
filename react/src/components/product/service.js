import axios from "axios";

const apiAddress = "http://localhost:5000/products/";

export const productService = {
  getProducts: (q = "") => {
    return axios.get(apiAddress + q);
  },
  getProductById: (id) => {
    return axios.get(apiAddress + id);
  },
  addComment: (productId, comment) =>
    axios.post(apiAddress + productId + "/comments", comment),
  getComment: (productId) => axios.get(apiAddress + productId + "/comments"),
};
