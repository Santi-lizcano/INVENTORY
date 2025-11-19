import app from "./app.js";
const main = () => {
    app.listen(app.get("port"));
    console.log(`El servidor web esta corriendo en ${app.get("port")}` )
 
}

main();