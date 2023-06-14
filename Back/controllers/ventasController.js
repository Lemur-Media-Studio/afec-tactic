var ventasModel = require("../models/ventasModel")
var productosModel = require("../models/productosModel")
module.exports = {
    getAll: async function(req, res, next) {
        let productos = await productosModel.find({})
        await categoriesModel.populate(productos,{path:'category'})
        console.log(productos)
        res.status(200).json(productos)
      },
    
    create: async function(req, res, next) {
        console.log(req.body.userToken)
        let productos = await productosModel.find({})
        .select(['_id','name','price'])
        .where('_id').in(req.body.products)

        console.log(productos)

        let total=0;
        let records = productos.map(product=>{
            total+=product['price']
            return({
                product_id:product["_id"],
                name:product['name'],
                price:product['price']
            })
        })

        console.log(records)

        let ventas = new ventasModel({
            user:req.body.userToken.usuario._id,
            total: total,
            products:records
        })
        let data = await ventas.save();
        res.status(201).json({"stauts":"ok","data":data})
    }
}