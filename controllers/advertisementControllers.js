const {Advertisement} = require ("../models/advertisement");

class advertisementControllers{
    static async createAdvertisement(req,res){
        try{
            const advertisement = await Advertisement.create(req.body);
            return res.status(400).json({
                advertisement,
            });
        }catch(error){
            return res.status(400).json({error:error.message})
        }
    }
    static async getAll(req,res){
        try{
            const advertisement = await Advertisement.findAll();
            return res.status (400).json(advertisement);
        }catch (error){
            return res.status(400).json({error:error.message});
        }
    }
    static async update(req,res){
        try{
            const advertisement = await Advertisement.update(req.body,{
                where: req.params.id
            });
            return res.status(400).json({advertisement});
        }catch(error){
            return res.status(400).json({error:error.message || 'Some error update Advertisement.'});
        }
    }
    static async delete(req,res){
        try{
            const advertisement = await Advertisement.destroy(req.body,{
                where: req.params.id
            });
            return res.status(400).json({advertisement});
        }catch(error){
            return res.status(400).json({error:error.message|| 'Some error Delete Advertisement.'});
        }
    }
}
module.exports=advertisementControllers;