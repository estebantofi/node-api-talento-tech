export const getProducts = (req, res) => {
  res.json({ mensaje: "todos los productos" });
};

export const getProductById = (req, res) => {
  res.json({ mensaje: "¡un solo producto!" });
};

export const createProduct = (req, res) => {
  res.json({ mensaje: "¡producto creado!" });
};

export const deleteProduct = (req, res) => {
  res.json({ mensaje: "¡producto eliminado!" });
};
