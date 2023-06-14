//4- Require del modulo
var categoriesModel = require("../models/categoriasModel")

module.exports = {
    getAll: async function(req, res, next) {
      let categorias = await categoriesModel.paginate({},{
          limit:2,
          sort:{name:1},
          page:(req.query.page?req.query.page:1)
      })
      console.log(categorias)
      res.status(200).json(categorias)
    },
    getAllSinPaginado: async function(req, res, next) {
      let categorias = await categoriesModel.find({})
      res.status(200).json(categorias)
    },
    getById: async function(req, res, next) {
      console.log(req.params.id)
      let categorias = await categoriesModel.findById(req.params.id)
      console.log(categorias)
      res.status(200).json(categorias)
    },
    create: async function(req, res, next) {
        let producto = new categoriesModel({
            name: req.body.name
        })
        let data = await producto.save();
        res.status(201).json({"stauts":"ok","data":data})
    },
    update: async function(req, res, next) {
        //let data = await productosModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await categoriesModel.update({ _id: req.params.id}, req.body, { multi: false })
        res.status(201).json({"stauts":"ok","data":data})
    },
    delete: async function(req, res, next) {
        //let data = await productosModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await categoriesModel.deleteOne({_id:req.params.id});
        res.status(201).json({"stauts":"ok","data":data})
    }
    
    
}