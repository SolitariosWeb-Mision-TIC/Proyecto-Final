const express = require('express');
const router = express.Router();
//const products = require('../models/products');
const sales = require('../models/sales');
const Product = require('../models/product');
const { create } = require('../models/sales');

router.get('/', async (_req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const body = req.body
    try {
        const productDB = new Product(body);
        await productDB.save()
        //await Product,create(body)
        res.status(200).json(productDB);
    } catch (error) {
        console.log('error', error);
    }
});

router.put('/:_id', async (req, res) => {
        const id = req.params._id;
        const body = req.body;
        try {
            const productDB = await Product.findByIdAndUpdate(id, body, {useFindAndModify: false} )
            //await Product,create(body)
            res.status(200).json(productDB)
        } catch (error) {
            console.log('error', error)
        }
})

router.put('/restar', async (req, res) => {
    const carrito = req.body.carrito;
    alert(carrito);
    carrito.forEach(product => {
        alert(product.name);
        const productDB =  product.findById(product._id);
        alert(productDB);
        productDB.stock= productDB.stock-1;
        const productDB2 =  Product.findByIdAndUpdate(id, productDB, {useFindAndModify: false} );
        res.status(200).json(productDB2);
        try {
        } catch (error) {
            console.log('error', error)
        }
    });
})

router.delete('/:_id', async (req, res) => {
    const id = req.params._id;
    try {
        const productoDB = await Product.findOneAndDelete({ _id: id });
        
        if (!productoDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indica1do',
                error
            })
        }else{
            res.json({
                estado: true,
                mensaje: 'eliminado'
            });
        }



    } catch (error) {
        console.log('error', error)
    }
});

router.get('/sales', async (_req, res) => {
    res.json(sales);
});

/*//task model
const Task = require('../models/tasks');

//get all tasks
router.get('/', async (_req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const{title, description} = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'Task saved'});
});

//Update a task
router.put('/:id', async (req, res) => {
    const{title, description} = req.body;
    const newTask = ({title, description});
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Udpated'});
});

//Delete a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Task Deleted'});
});
*/

module.exports = router;