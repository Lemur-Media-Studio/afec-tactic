var productosModel = require("../models/productosModel")
var categoriesModel = require("../models/categoriasModel")
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './public/images/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');

module.exports = {
    getAll: async function(req, res, next) {
        /*let productos = await productosModel.paginate({},{
            populate:'category',
            limit:2,
            sort:{name:1},
            page:(req.query.page?req.query.page:1)
        })*/
        let productos = await productosModel.find()
        .populate('category')
        console.log(productos)
        res.status(200).json({data:productos})
      },
      getByCategoria: async function(req, res, next) {
  
        let productos = await productosModel.paginate({category:req.params.id},{
            populate:'category',
            limit:2,
            sort:{name:1},
            page:(req.query.page?req.query.page:1)
        })
        console.log(productos)
        res.status(200).json(productos)
      },
    
    getDestados: async function(req, res, next) {
        let productos = await productosModel.find({'destacado':1})
        console.log(productos)
        res.status(200).json(productos)
    },
    getById: async function(req, res, next) {
        console.log(req.params.id)
        let productos = await productosModel.findById(req.params.id)
        console.log(productos)
        res.status(200).json(productos)
    },
    create: async function(req, res, next) {
        console.log(req.body.images)
        let producto = new productosModel({
            q1: req.body.q1, 
            q2:req.body.q2,

          
        })
        let data = await producto.save();
        res.status(201).json({"stauts":"ok","data":data})
    },
    update: async function(req, res, next) {
        //let data = await productosModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await productosModel.update({ _id: req.params.id}, req.body, { multi: false })
        res.status(201).json({"stauts":"ok","data":data})
    },
    delete: async function(req, res, next) {
        //let data = await productosModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await productosModel.deleteOne({_id:req.params.id});
        res.status(201).json({"stauts":"ok","data":data})
    },
    upload: async function(req, res, next) {
        try{
            var path = '';
            upload(req, res, function (err) {

                    if (err) {
                        // An error occurred when uploading
                        console.log(err);
                        next()
                    }  
                    // No error occured.
                    path = req.file.path;
                    res.status(201).json({status: "success", message: "Imagen cargada exitosamente", data: req.file});
            });  
        }catch(e){
        
            console.log(e)
            next(e)
        }
    }
}