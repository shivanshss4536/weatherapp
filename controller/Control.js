const dateUtils = require('./date');
const https=require("https")
const express=require("express");
const app=express();
app.set('view engine', 'ejs')   

const timestamp = 1697878800;
const date = new Date(timestamp * 1000); // Convert Unix timestamp to Date
const formattedDate = dateUtils.formatDate(date);


const mainRoute=(req,res)=>{
    res.render("index");
}

function windDegreeToDirection(windDegree) {
    // Check if the wind degree is valid
    if (windDegree < 0 || windDegree > 360) {
    return "Invalid wind degree";
    }

    // Define the cardinal directions
    const cardinalDirections = ["North", "East", "South", "West"];

    // Calculate the cardinal direction index
    const cardinalDirectionIndex = Math.floor((windDegree + 22.5) / 45);
    // Return the cardinal direction
    return cardinalDirections[cardinalDirectionIndex];
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
            const type=weatherData.list[0].weather[0].main
            const img=weatherData.list[0].weather[0].icon;
            const humidity=weatherData.list[0].main.humidity;
            const windSpeed=weatherData.list[0].wind.speed;
            const windSpeedDirection=windDegreeToDirection(weatherData.list[0].wind.speed);
            
            const imgURL="https://openweathermap.org/img/wn/"+img+"@4x.png"
            res.render("target",{City:cityName,Temp:temp,Type:type,Humidity:humidity,WindSpeed:windSpeed,WindSpeedDirection:windSpeedDirection,img:imgURL});
        })
    })
}
module.exports={
    mainRoute,Search
}