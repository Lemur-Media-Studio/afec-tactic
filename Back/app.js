var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var usuariosRouter = require('./routes/usuarios');
var ventasRouter = require('./routes/ventas');
//2- require del router
var categoriasRouter = require('./routes/categorias');

var app = express();

app.set('secretKey',process.env.SECRET_KEY)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** HEADER INICIO */
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
  next();
});
app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With,x-access-token');
  res.send(200);
});
/** HEADER FIN */


//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/answers',productosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/ventas',validateUser, ventasRouter);
//1- agregar el app user
app.use('/categorias', categoriasRouter);

function validateUser(req,res,next){
  console.log(req.app.get('secretKey'))
  jwt.verify(req.headers['x-access-token'],req.app.get('secretKey'),function(err,decoded){
    if(err){
      res.json({message:err.message})
    }else{
      console.log(decoded)
      req.body.userToken = decoded
      next();
    }
  })
}
//Set validateUser en app
app.validateUser = validateUser;
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/** ERROR HANDLER **/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err)
  res.json({code:err.code,msg:err.message});
  //res.render('error');
});

module.exports = app;
