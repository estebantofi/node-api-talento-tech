import {
  deleteProductById,
  getAllCollection,
  addProduct,
  searchProductById,
} from "../services/products.service.js";

export const getProducts = async (req, res) => {
  try {
    const collection = await getAllCollection();

    const products = [];

    if (collection) {
      collection.forEach((doc) => {
        products.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    }

    res.json({ mensaje: "Productos encontrados", data: products });
  } catch {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const product = await searchProductById(id);

      if (!product) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
      }

      return res.json({ mensaje: "Producto encontrado", data: product });
    } catch {
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  return res.status(400).json({ mensaje: "Id requerido" });
};

export const createProduct = async (req, res) => {
  const { title, image, description, price } = req.body || {};

  if (title && image && description && price) {
    try {
      const product = await addProduct(req.body);

      return res
        .status(201)
        .json({ mensaje: "Producto creado", data: product });
    } catch {
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  return res.status(400).json({ mensaje: "Todos los campos son requeridos" });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const isDelete = await deleteProductById(id);

      if (!isDelete) {
        return res
          .status(404)
          .json({ mensaje: "Producto no encontrado para eliminar" });
      }

      return res.json({ mensaje: "Producto Eliminado" });
    } catch {
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  return res.status(400).json({ mensaje: "Id requerido" });
};
