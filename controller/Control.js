const dateUtils = require('./date');
const https=require("https")
const express=require("express");
const app=express();
app.set('view engine', 'ejs')   

const timestamp = 1697878800;
const date = new Date(timestamp * 1000); // Convert Unix timestamp to Date
const formattedDate = dateUtils.formatDate(date);


const mainRoute=(req,res)=>{
    const cityName="delhi"
    const apikey="24be5d3fa2d486a7e6e67ab9f3624567";
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apikey;

    //API call
    https.get(url,function(response){
        console.log(response.statusCode)
        if(response.statusCode=="404"){
            res.render("index");
        }
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.list[0].main.temp;
            const type=weatherData.list[0].weather[0].main;
            res.render("index",{Temp:temp,Type:type});
        })
    })
}

const Search=(req,res)=>{
    const cityName=req.body.cityName;
    const apikey="24be5d3fa2d486a7e6e67ab9f3624567";
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apikey;

    //API call
    https.get(url,function(response){
        if(response.statusCode=="404"){
            res.render("index");
        }

        let resultData = '';
        response.on('data', data => resultData += data);
        
        response.on("end",()=>{
            
            const weatherData=JSON.parse(resultData);
            const temp=weatherData.list[0].main.temp
            const type=weatherData.list[0].weather[0].main
            res.render("index",{Temp:temp,Type:type});
        })
    })
}
module.exports={
    mainRoute,Search
}