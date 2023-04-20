const mongoose = require('mongoose');

const productsCollection = "productos";

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'porfavor escriba el nombre del productos'],
        unique: true    
    },
    precio: {
        type: Number,
        required: [true, 'porfavor agregue el precio del producto']
    },
    descripcion: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: [true, 'porfavor agregue la descripcion del producto']
    },
    categoria: {
        type: String,
        required: [true, 'porfavor especifique el tipo de producto']
    }
}, {
    timestamps: true
})

const Product = mongoose.model(productsCollection, productSchema);
module.exports = Product