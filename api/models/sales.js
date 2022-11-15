const mongoose = require('mongoose');
const {Schema} = mongoose;

const salesSchema = new Schema({

    name: {type: String, required: true},
    descripcion: {type: String, required: true},
    stock: {type: Number, required: true},
    valor: {type: Number, required: true},
});

module.exports = mongoose.model('Sales', salesSchema);
