var express = require('express');
var router = express.Router();

//3- Require del controlador
var categoriasController = require("../controllers/categoriasController")

/* GET home page. */
router.get('/', categoriasController.getAll);
router.get('/combo/', categoriasController.getAllSinPaginado);
router.get('/:id', categoriasController.getById);
router.post('/', categoriasController.create);
router.put('/:id', categoriasController.update);
router.delete('/:id', categoriasController.delete);

module.exports = router;