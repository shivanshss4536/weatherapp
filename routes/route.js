const express=require("express")
const router=express.Router();

const {mainRoute}=require("../controller/Control")
const {Search}=require("../controller/Control")



router.route("/").get(mainRoute).post(Search);

module.exports=router;