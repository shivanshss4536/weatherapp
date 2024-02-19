const Utils = require('./Util');
const https = require("https")
const express = require("express");
const app = express();

app.set('view engine', 'ejs')




const mainRoute = (req, res) => {
    


    res.render("index");
}



const Search = (req, res) => {
    const cityName = req.body.cityName;
    const apikey = "24be5d3fa2d486a7e6e67ab9f3624567";
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apikey;
    console.log(url);
    //API call
    https.get(url, function (response) {
        if (response.statusCode == "404") {
            res.render("fail");
        }
        else {
            console.log("hello2")
            let resultData = '';
            response.on('data', data => resultData += data);

            response.on("end", () => {
                const weatherData = JSON.parse(resultData);
                const type = weatherData.list[0].weather[0].description;
                const temp = Utils.KtoCelsius(weatherData.list[0].main.temp);
                const temp2 = Utils.KtoCelsius(weatherData.list[1].main.temp);
                const temp3 = Utils.KtoCelsius(weatherData.list[2].main.temp);
                const temp4 = Utils.KtoCelsius(weatherData.list[3].main.temp);
                const temp5 = Utils.KtoCelsius(weatherData.list[4].main.temp);
                const temp6 = Utils.KtoCelsius(weatherData.list[5].main.temp);
                const temp7 = Utils.KtoCelsius(weatherData.list[6].main.temp);
                const temp8 = Utils.KtoCelsius(weatherData.list[7].main.temp);
                
                const mainIcon = Utils.SelectIcon(weatherData.list[0].weather[0].icon);
                const two= Utils.SelectIcon(weatherData.list[1].weather[0].icon);
                const three= Utils.SelectIcon(weatherData.list[2].weather[0].icon);
                const four= Utils.SelectIcon(weatherData.list[3].weather[0].icon);
                const five= Utils.SelectIcon(weatherData.list[4].weather[0].icon);
                const six= Utils.SelectIcon(weatherData.list[5].weather[0].icon);
                const seven= Utils.SelectIcon(weatherData.list[6].weather[0].icon);
                const eight= Utils.SelectIcon(weatherData.list[7].weather[0].icon);


                const humidity = weatherData.list[0].main.humidity;
                const windSpeed = weatherData.list[0].wind.speed;
                const windSpeedDirection = Utils.windDegreeToDirection(weatherData.list[0].wind.speed);
                const pressure = weatherData.list[0].main.pressure;
                const min = Utils.KtoCelsius(weatherData.list[0].main.temp_min);
                const max = Utils.KtoCelsius(weatherData.list[0].main.temp_max);
                const visibility=weatherData.list[0].visibility;
                const seaLevel=weatherData.list[0].main.sea_level;
                const groundLevel=weatherData.list[0].main.grnd_level;
                const feel=weatherData.list[0].main.feels_like;

                const cloud=weatherData.list[0].clouds.all
                const time=Utils.getCurrentTime();
                const videoBg=Utils.SelectBg(weatherData.list[0].weather[0].icon)
                const ImgBg=Utils.SelectImgBg(weatherData.list[0].weather[0].icon)

                res.render("target", { cloud:cloud,time:time,City: cityName,Visibility:visibility,Feel:feel,
                    SeaLevel:seaLevel,GroundLevel:groundLevel, Temp: temp, Min: min, Max: max, Type: type, 
                    Humidity: humidity, WindSpeed: windSpeed, WindSpeedDirection: windSpeedDirection, Pressure: pressure,
                    img: mainIcon, vbg: videoBg,ibg:ImgBg, two:two, three:three, four:four, five:five, six:six, seven:seven, eight:eight,
                Temp2:temp2,Temp3:temp3,Temp4:temp4,Temp5:temp5,Temp6:temp6,Temp7:temp7,Temp8:temp8});
            })
        }
    })
}
module.exports = {
    mainRoute, Search
}