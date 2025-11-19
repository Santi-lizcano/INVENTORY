import express from "express";
import categoriaRoutes from "./routes/categories.routes.js"
const app = express();

app.set("port", 7000)
app.use("/api/categorias", categoriaRoutes)
export default app;