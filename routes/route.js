const express=require("express")
const router=express.Router();

const {mainRoute}=require("../controller/Control")
const {Search}=require("../controller/Control")


router.get('/',mainRoute)
router.get('/target',Search)
router.post('/target',Search)

module.exports=router;