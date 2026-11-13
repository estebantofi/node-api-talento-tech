export const notFound = (req, res) => {
  res.status(404).json({ mensaje: "Ruta no Encontrada." });
};
