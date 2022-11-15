const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({

    name: String,
    descripcion: String,
    stock: Number,
    valor: Number,
});

module.exports = mongoose.model('Product', productSchema);
