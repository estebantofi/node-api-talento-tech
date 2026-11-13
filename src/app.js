import express from "express";
import cors from "cors";
import { json } from "body-parser";

import products from "./routes/products.route.js";
import auth from "./routes/auth.route.js";

import { notFound } from "./middlewares/notFound.js";
import { verifyToken } from "./utils/jwt.js";

const app = express();

const prefix = "/api";

// Middleware
app.use(cors());
app.use(json());

// Rutas
app.use(`${prefix}/products`, verifyToken, products);
app.use(`${prefix}/auth`, auth);

// Ruta no encontrada
app.use(notFound);

export default app;
