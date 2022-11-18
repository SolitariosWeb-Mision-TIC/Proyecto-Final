const mongoose = require('mongoose');
const {Schema} = mongoose;

const salesSchema = new Schema({

    date: String,
    products: Array,
    total: Number,
});

module.exports = mongoose.model('Sales', salesSchema);
