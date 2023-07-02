var mainModel = require("../models/usuariosModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    
    create: async function(req, res, next) {
        //lANZAR EXCEPCIONES
        try{
            let data = await mainModel.create({name:req.body.name,user:req.body.user,password:req.body.password})

            res.status(201).json(data)
        }catch(e){
        
            console.log(e)
            next(e)
        }
    },
    login: async function(req, res, next) {
        //Consulto por usuario
        let usuario = await mainModel.findOne({user:req.body.user})
        if(usuario){
            //Validar el password
            if(bcrypt.compareSync(req.body.password,usuario.password)){
                //Password valido , genero token
                const token = jwt.sign({usuario:usuario},req.app.get('secretKey'),{expiresIn:'1h'})
                res.status(201).json({token:token})
            }else{
                //Password invalido
                res.json({message:"Password incorrecto",data:null})
            }
        }else{
            //Arrojar error
            res.json({message:"Usuario no existe",data:null})
        }

        
        
    }    
}