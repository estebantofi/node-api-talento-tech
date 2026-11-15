import { db } from "../config/firebase.js";

const products = db.collection("products");

export const findAll = async () => {
  const snapshot = await products.get();

  return snapshot.docs.map((document) => ({
    ...document.data(),
    id: document.id,
  }));
};

export const findById = async (id) => {
  const document = await products.doc(id).get();

  return document.exists ? { ...document.data(), id: document.id } : null;
};

export const create = async (product) => {
  const document = await products.add(product);

  return { ...product, id: document.id };
};

export const removeById = async (id) => {
  const document = products.doc(id);
  const snapshot = await document.get();

  if (!snapshot.exists) {
    return false;
  }

  await document.delete();

  return true;
};
