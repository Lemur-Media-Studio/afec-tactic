var express = require('express');
var router = express.Router();

var productosController = require("../controllers/productosController")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},productosController.getAll);
router.post('/upload', productosController.upload);
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},productosController.getAll);
router.get('/', productosController.getAll);
router.get('/destacados', productosController.getDestados);
router.get('/categoria/:id', productosController.getByCategoria);
router.get('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.getById);
router.post('/', productosController.create);
router.put('/:id', productosController.update);
router.delete('/:id', productosController.delete);

module.exports = router;
