import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
} from "../controllers/products.controller.js";

const products = Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Productos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: Productos encontrados
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: abc123
 *                       title:
 *                         type: string
 *                         example: Producto de ejemplo
 *                       image:
 *                         type: string
 *                         example: https://example.com/image.jpg
 *                       description:
 *                         type: string
 *                         example: Descripción del producto
 *                       price:
 *                         type: string
 *                         example: "19.99"
 *             example:
 *               mensaje: Productos encontrados
 *               data:
 *                 - id: abc123
 *                   title: Producto de ejemplo
 *                   image: https://example.com/image.jpg
 *                   description: Descripción del producto
 *                   price: "19.99"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
products.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtiene un producto por su ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: Producto encontrado
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: abc123
 *                     title:
 *                       type: string
 *                       example: Producto de ejemplo
 *                     image:
 *                       type: string
 *                       example: https://example.com/image.jpg
 *                     description:
 *                       type: string
 *                       example: Descripción del producto
 *                     price:
 *                       type: string
 *                       example: "19.99"
 *       400:
 *         description: No se proporcionó el identificador
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *             example:
 *               mensaje: Id requerido
 *       404:
 *         description: Producto no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *             example:
 *               mensaje: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
products.get("/:id", getProductById);

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Products]
 *     description: Requiere autenticación Bearer con un JWT válido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - image
 *               - description
 *               - price
 *             properties:
 *               title:
 *                 type: string
 *                 example: Producto de ejemplo
 *               image:
 *                 type: string
 *                 example: https://example.com/image.jpg
 *               description:
 *                 type: string
 *                 example: Descripción del producto
 *               price:
 *                 type: string
 *                 example: "19.99"
 *     responses:
 *       201:
 *         description: Producto creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: Producto creado
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: abc123
 *                     title:
 *                       type: string
 *                       example: Producto de ejemplo
 *                     image:
 *                       type: string
 *                       example: https://example.com/image.jpg
 *                     description:
 *                       type: string
 *                       example: Descripción del producto
 *                     price:
 *                       type: string
 *                       example: "19.99"
 *       400:
 *         description: Faltan campos requeridos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *             example:
 *               mensaje: Todos los campos son requeridos
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
products.post("/create", createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *             example:
 *               mensaje: Producto Eliminado
 *       400:
 *         description: No se proporcionó el identificador
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *             example:
 *               mensaje: Id requerido
 *       404:
 *         description: Producto no encontrado para eliminar
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *             example:
 *               mensaje: Producto no encontrado para eliminar
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
products.delete("/:id", deleteProduct);

export default products;
