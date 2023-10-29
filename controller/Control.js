const Utils = require('./Util');
const https=require("https")
const express=require("express");
const app=express();
app.set('view engine', 'ejs')   




const mainRoute=(req,res)=>{
    res.render("index");
}



const Search=(req,res)=>{
    const cityName=req.body.cityName;
    const apikey="24be5d3fa2d486a7e6e67ab9f3624567";
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apikey;

    //API call
    https.get(url,function(response){
        if(response.statusCode=="404"){
            res.render("fail");
        }
        console.log(url);
        let resultData = '';
        response.on('data', data => resultData += data);
        
        response.on("end",()=>{
            const weatherData=JSON.parse(resultData);
            const Ktemp=weatherData.list[0].main.temp;
            const Decimaltemp=Ktemp-273;
            const temp=Decimaltemp.toFixed(1)
            const type=weatherData.list[0].weather[0].description;
            const img=weatherData.list[0].weather[0].icon;
            const humidity=weatherData.list[0].main.humidity;
            const windSpeed=weatherData.list[0].wind.speed;
            const windSpeedDirection=Utils.windDegreeToDirection(weatherData.list[0].wind.speed);
            const pressure=weatherData.list[0].main.pressure;
            const min=weatherData.list[0].main.temp_min;
            const max=weatherData.list[0].main.temp_max;

            const timestamp = weatherData.list[0].dt;
            const formatDate = new Date(timestamp * 1000); // Convert Unix timestamp to Date
            const date = Utils.formatDate(formatDate);
            
            const imgURL="https://openweathermap.org/img/wn/"+img+"@4x.png"
            res.render("target",{Date:date,City:cityName,Temp:temp,Min:min,Max:max,Type:type,Humidity:humidity,WindSpeed:windSpeed,WindSpeedDirection:windSpeedDirection,Pressure:pressure,img:imgURL});
        })
    })
}
module.exports={
    mainRoute,Search
}