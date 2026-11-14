import { db } from "../config/firebase.js";

export const getAllCollection = async (params) => {
  const collection = await db.collection("products").get();

  return collection.empty ? null : collection;
};

export const searchProductById = async (id) => {
  const document = await db.collection("products").doc(id).get();

  return document.exists ? { id: document.id, ...document.data() } : null;
};

export const addProduct = async (product) => {
  const newProduct = await db.collection("products").add(product);

  return { ...product, id: newProduct.id };
};

export const deleteProductById = async (id) => {
  const collection = db.collection("products").doc(id);
  const document = await collection.get();

  if (!document.exists) {
    return null;
  }

  await collection.delete();

  return true;
};
