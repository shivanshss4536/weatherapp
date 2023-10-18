const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{    
    res.render("index")
})

const PORT=process.env.PORT || 80
app.listen(PORT,()=>{
    console.log("listening");
})