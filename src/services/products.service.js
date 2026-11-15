import {
  create,
  findAll,
  findById,
  removeById,
} from "../models/product.model.js";

export const getAllProducts = () => findAll();
export const findProductById = (id) => findById(id);
export const saveProduct = (product) => create(product);
export const deleteProductById = (id) => removeById(id);
