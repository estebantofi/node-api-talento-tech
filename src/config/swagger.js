import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api Talento Tech",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Introduce tu token de JWT en formato: Bearer <token>",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },

  apis: [path.resolve(__dirname, "../routes/*.js")],
};
