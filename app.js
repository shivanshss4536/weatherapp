const express=require("express");
const bodyParser=require("body-parser");
const Route=require("./routes/route.js")

//Middlewares
const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')   

//Routes
app.use('/',Route);

const PORT=process.env.PORT || 80;
app.listen(PORT,()=>{
    console.log("listening");
})