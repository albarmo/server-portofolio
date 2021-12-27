const {Banner} = require ("../models");

class bannerController{
    static async createBanner(req,res){
        try{
            const banner = await Banner.create(req.body);
            return res.status(400).json({
                banner,
            });
        } catch (error){
            return res.status(400).json({error: error.message})
        }
    }
    static async getAll(req,res){
        try{
            const banner = await Banner.findAll()
            return res.status(400).json(banner);
        }
        catch (error){
            return res.status(400).json({error:error.message})
        }
    }
    static async update(req,res){
        try{
            const banner = await Banner.update(req.body, {
                where:{
                    id:req.params.id
                }
            });
            return res.status(400).json(banner);
        }catch(error){
            res.status(400).json({error:error.message || 'Some error update Banners.'});
        }
    }
    static async delete(req,res){
        try{
            const banner = await Banner.destroy(req.body, {
                where:{
                    id:req.params.id
                }
            });
            return res.status(400).json(banner);
        }catch (error){
            res.status(400).json({error:error.message || 'Some error Delete Banners.'});
        }
    }
}
module.exports=bannerController;