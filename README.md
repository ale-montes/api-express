# Api-Express-Typescript

API REST construida con **Express 5** y **TypeScript**, usando arquitectura MVC y preparada para desarrollo eficiente y ordenado.

## Descripción

Proyecto backend con Express y TypeScript que implementa un ejemplo de CRUD para personajes (characters) usando patrón MVC. Incluye logging con Morgan, validación de código con ESLint, y formateo con Prettier.

Para facilitar las pruebas, se incluye un archivo `characters.http` con peticiones HTTP predefinidas para testear los endpoints CRUD.


## Tecnologías y dependencias

- Node.js (con soporte ES Modules)
- Express 5.1.0
- Morgan para logging
- TypeScript 5.8.3
- ESLint + @typescript-eslint + eslint-plugin-prettier
- Prettier para formateo
- TSX para ejecución y recarga en desarrollo


## Requisitos

- Node.js (v20 o superior recomendado)

## Instalación

```bash
git clone https://github.com/ale-montes/api-express.git
cd api-express
pnpm install
```
## Uso
**Para correr la aplicación en modo desarrollo:**
```bash
pnpm run dev
```
**Para transpilar el codigo y ejecutar:**
```bash
pnpm run start
```
**EsLint + Prettier:**
```bash
pnpm run lint
```

Luego, podés usar el archivo src/haracters/characters.http (compatible con VSCode REST Client o herramientas similares) para probar los endpoints CRUD:

GET /characters — Listar todos los personajes
GET /characters/:id — Obtener un personaje por id
POST /characters — Crear un nuevo personaje
PUT /characters/:id — Actualizar completamente un personaje existente
PATCH /characters/:id — Actualizar parcialmente un personaje existente
DELETE /characters/:id — Eliminar un personaje

## Licencia
Este proyecto está bajo la licencia MIT.