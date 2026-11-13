import express from "express";
import cors from "cors";
import { json } from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import products from "./routes/products.route.js";
import auth from "./routes/auth.route.js";

import { notFound } from "./middlewares/notFound.js";
import { verifyToken } from "./utils/jwt.js";
import { swaggerOptions } from "./config/swagger.js";

const app = express();

const prefix = "/api";

// Middleware
app.use(cors());
app.use(json());

// Swagger
if (process.env.NODE_ENV !== "production") {
  const swaggerDocs = swaggerJSDoc(swaggerOptions);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

// Rutas
app.use(`${prefix}/products`, verifyToken, products);
app.use(`${prefix}/auth`, auth);

// Ruta no encontrada
app.use(notFound);

export default app;
