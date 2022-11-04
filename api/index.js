const express = require('express');
const app = express();


app.use('/api/products',require('./routes/products.routes'));
app.listen(1234);