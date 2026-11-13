# API Talento Tech

API REST construida con Express. Este documento describe cómo iniciar el servidor y probar sus endpoints (EP) localmente.

## Requisitos

- Node.js y npm instalados.
- Acceso a una terminal en la raíz del proyecto.

## 1. Preparar el entorno

Instala las dependencias:

```bash
npm install
```

Crea el archivo `.env` a partir del ejemplo:

```bash
cp .env.example .env
```

## 2. Iniciar la API

Modo desarrollo, con reinicio al detectar cambios:

```bash
npm run dev
```

También puedes iniciar el servidor sin modo de observación:

```bash
npm start
```

Si no se especifica `PORT`, el servidor usa el puerto `3000`. La URL base local es `http://localhost:3000`.

## 3. Usar Swagger UI

Con el servidor en ejecución, abre [http://localhost:3000/api-docs](http://localhost:3000/api-docs) para acceder a la interfaz de Swagger.

Swagger no estará disponible en producción.

## Endpoints disponibles

| Método   | Ruta                   | Autenticación | Descripción                      |
| -------- | ---------------------- | ------------- | -------------------------------- |
| `POST`   | `/api/auth/login`      | No            | Inicia sesión y devuelve un JWT. |
| `GET`    | `/api/products`        | Sí            | Lista productos.                 |
| `GET`    | `/api/products/{id}`   | Sí            | Consulta un producto por ID.     |
| `POST`   | `/api/products/create` | Sí            | Crea un producto.                |
| `DELETE` | `/api/products/{id}`   | Sí            | Elimina un producto por ID.      |
