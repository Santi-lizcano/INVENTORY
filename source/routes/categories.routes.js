import { Router } from "express";
import { methodHTTP as categoriascontrol} from "../controller/categorias.control.js";
const router = Router();

router.get("/", categoriascontrol.getCategories)

export default router;