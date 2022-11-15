const mongoose = require('mongoose');
const URL = 'mongodb+srv://root:root@store.1f4lms6.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URL)
    .then(_db => console.log('Connected to MongoDB'))
    .catch(error => console.error(error));

module.exports = mongoose;