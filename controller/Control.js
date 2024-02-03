const Utils = require('./Util');
const https = require("https")
const express = require("express");
const app = express();
app.set('view engine', 'ejs')




const mainRoute = (req, res) => {
    

    console.log("hello1")
    res.render("index");
}



const Search = (req, res) => {
    console.log("hello2")
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
            let resultData = '';
            response.on('data', data => resultData += data);

            response.on("end", () => {
                const weatherData = JSON.parse(resultData);
            const temp = Utils.KtoCelsius(weatherData.list[0].main.temp);
            const type = weatherData.list[0].weather[0].description;
            const img = Utils.SelectIcon(weatherData.list[0].weather[0].icon);
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

            const timestamp = weatherData.list[0].dt;
            const formatDate = new Date(timestamp * 1000); // Convert Unix timestamp to Date
            const date = Utils.formatDate(formatDate);
            const day=Utils.getDayTime(timestamp);
            const bg=Utils.SelectBg(weatherData.list[0].weather[0].icon)
            console.log(bg);

                res.render("target", { Date: date, City: cityName,Day:day,Visibility:visibility,Feel:feel,SeaLevel:seaLevel,GroundLevel:groundLevel, Temp: temp, Min: min, Max: max, Type: type, Humidity: humidity, WindSpeed: windSpeed, WindSpeedDirection: windSpeedDirection, Pressure: pressure, img: img, bg: bg });
            })
        }
    })
}
module.exports = {
    mainRoute, Search
}