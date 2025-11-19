import getConect from "./../database/db.js"
const getCategories = async (req, res) => {
    try{
        const connect = await getConect();
    const rst = await connect.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
    res.json(rst)
    } catch (error){
        console.error("Error de algun tipo")
    }
    
}

export const methodHTTP = {
    getCategories
}