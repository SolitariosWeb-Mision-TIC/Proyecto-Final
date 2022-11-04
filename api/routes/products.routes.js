const express = require('express');
const router = express.Router();

const products = require('../models/products');


router.get('/', async (_req, res) => {
    res.json(products);
});

module.exports = router;