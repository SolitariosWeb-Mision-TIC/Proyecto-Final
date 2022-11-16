const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//db connection 
const {mongoose} = require('./database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/store',require('./routes/store.routes'));

app.listen(1234);