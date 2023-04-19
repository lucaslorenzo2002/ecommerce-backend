const Product  = require('../../schemas/producto');
const logger = require('../../utils/logger');
const transformarADto = require('../../dtos/productosDTO');

class ProductosDAO{
    constructor(connection){
        this.connection = connection
    }

    async crearProducto(prod){
        try{
            const data = await Product.create(prod);
            logger.info('producto creado: ' + this.type)
            logger.info(data)            
        }catch(err){
            logger.info(err)
        }
    } 

    async getProductos(){
        try{
            const find = await Product.find().lean()
            return find
        }catch(err){
            logger.info(err)
        }
    }

    async getProductoId(id){
        try{
            return await Product.findById({_id: id}).lean()
        }catch(err){
            logger.info(err)
        }       
    }           

    async getProductoByName(nombre){
        try {
            return await Product.find({nombre}).lean()
        } catch (error) {
            
        }
    }

    async actualizarProducto(id, nuevoValor1, nuevoValor2){
        try{
            return await Product.findByIdAndUpdate(id, {nombre: nuevoValor1, precio: nuevoValor2}).lean()
        }catch(err){
            logger.info(err)
        }
    }

    async eliminarProducto(id){
        try{
            return await Product.deleteOne({_id: id});
        }catch(err){
            logger.info(err)
        }
    }
}

module.exports = ProductosDAO