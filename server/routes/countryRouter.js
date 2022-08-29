const Router=require('express')
const router=new Router()
const countryController=require('../controllers/countryController')

router.get("/",countryController.getAll);
router.get("/:id",countryController.getCountryById);

module.exports=router