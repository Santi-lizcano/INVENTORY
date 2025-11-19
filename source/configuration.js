// configuración centralizada de variables de entorno
import dotenv from "dotenv";

// carga .env
dotenv.config();

// exporta la configuración (export default)
const config = {
  host     : process.env.DB_HOST || process.env.HOST,
  database : process.env.DB_NAME || process.env.DATABASE,
  user     : process.env.DB_USER || process.env.USER,
  password : process.env.DB_PASSWORD || process.env.PASSWORD,
  port     : process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
};

export default config;