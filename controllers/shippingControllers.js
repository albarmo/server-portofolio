const {Shipping} = require("../models");

class shippingControllers{
    static async createShipping(req,res){
        try{
            const shipping = await Shipping.create(req.body);
            return res.status(201).json({
                shipping,
            });
        }catch(error){
            return res.status(400).json({error:error.message});
        }
    }
    static async getAll(req,res){
        try{
            const shipping = await Shipping.findAll();
            return res.status(200).json({shipping});
        }catch(error){
            return res.status(400).json({error:error.message});
        }
    }
    static async update(req,res){
        try{
            const updateShipping = await Shipping.update(req.body,{
                where: {
                    id:req.params.id
                },
                returning:true,
            });
            return res.status(201).json(updateShipping);
        }catch(error){
            return res.status(400).json({error:error.message});
        }
    }
    static async delete(req,res){
        const {id} = req.params
        try{
            const shipping = await Shipping.destroy({
                where:{
                    id:req.params.id
                }
            });
            if (shipping) {
                return res
                  .status(200)
                  .json({ message: `success delete shipping with id ${id}` });
              } else {
                return res
                  .status(404)
                  .json({ message: `failed, delete user with shipping ${id} not found` });
              }
            } catch (error) {
              return res.status(500).json({ message: error.message });
        }
    }

}
module.exports=shippingControllers;