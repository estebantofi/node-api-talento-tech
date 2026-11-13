import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
} from "../controllers/products.controller.js";

const products = Router();

products.get("/", getProducts);
products.get("/:id", getProductById);
products.post("/create", createProduct);
products.delete("/:id", deleteProduct);

export default products;
