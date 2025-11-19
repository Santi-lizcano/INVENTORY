import mysql from "promise-mysql";
import config from "../configuration.js"; // IMPORTAR el default

const connect = mysql.createConnection({
  host     : config.host,
  database : config.database,
  user     : config.user,
  password : config.password,
  port     : config.port
});

const getConnect = () => connect;

export default getConnect;