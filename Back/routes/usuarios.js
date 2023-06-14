var express = require('express');
var router = express.Router();

var mainController = require("../controllers/usuariosController")

/* GET home page. */
router.post('/registro', mainController.create);
router.post('/login', mainController.login);

module.exports = router;