const Product  = require('../../schemas/producto');
const logger = require('../../utils/logger');
const transformarADto = require('../../dtos/productosDTO')

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
            const findId = await Product.findById({_id: id}).lean();
            return findId
        }catch(err){
            logger.info(err)
        }       
    }           

    async actualizarProducto(id, nuevoValor1, nuevoValor2){
        try{
            const upd = await Product.findByIdAndUpdate(id, {nombre: nuevoValor1, precio: nuevoValor2}).lean()
            return upd
        }catch(err){
            logger.info(err)
        }
    }

    async eliminarProducto(id){
        try{
            const del = await Product.deleteOne({_id: id});
            return del
        }catch(err){
            logger.info(err)
        }
    }
}

module.exports = ProductosDAO