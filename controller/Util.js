function getCurrentTime() {
    const now = new Date();
  // Format the time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = String(now.getFullYear()).slice(2);

  // Assemble the formatted string
    const formattedTime = `${hours}:${minutes}- ${day} ${month} ${year}`;

    return formattedTime;
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





function KtoCelsius(Ktemp) {
    const CelsiusTemp = Ktemp - 273;
    const temp = CelsiusTemp.toFixed(0);
    return temp;
}

function SelectIcon(icon){
    if(icon=="01d"){
        return "/Icons/clear-day.svg";
    }
    else if(icon=="01n"){
        return "/Icons/clear-night.svg";
    }
    else if(icon=="02d"){
        return "/Icons/few-cloud-night.svg";
    }
    else if(icon=="02n"){
        return "/Icons/few-cloud-night.svg";
    }
    else if(icon=="03d" || icon=="03n"){
        return "/Icons/scattered-clouds.svg";
    }
    else if(icon=="04d" || icon=="04n"){
        return "/Icons/broken-clouds.svg";
    }
    else if(icon=="09d" || icon=="09n"){
        return "/Icons/shower-rain.svg";
    }
    else if(icon=="10d"){
        return "/Icons/rain-day.svg";
    }
    else if(icon=="10n"){
        return "/Icons/rain-night.svg";
    }
    else if(icon=="11d"){
        return "/Icons/thunderstorm-day.svg";
    }
    else if(icon=="11n"){
        return "/Icons/thunderstorm-night.svg";
    }
    else if(icon=="13d" || icon=="13n"){
        return "/Icons/Snow.svg";
    }
    else if(icon=="50d" || icon=="50n"){
        return "/Icons/mist.svg";
    }


}

function SelectBg(icon){
    if(icon=="01d" || icon=="02d"){
        return "/video-background/Sunny.mp4";
    }
    else if(icon=="03d" || icon=="03n" || icon=="04d" || icon=="04n"){
        return "/video-background/Foggy.mp4";
    }
    else if(icon=="11d" || icon=="11n" || icon=="09d" || icon=="09n" || icon=="10d" || icon=="10n"){
        return "/video-background/Rainy.mp4";
    }
    else if(icon=="13d" || icon=="13n"){
        return "/video-background/Snowy.mp4";
    }
    else if(icon=="50d" || icon=="50n"){
        return "/video-background/Foggy.mp4";
    }
    else{
        return "/video-background/Night.mp4"
    }
}
function SelectImgBg(icon){
    if(icon=="01d" || icon=="02d"){
        return "/image-background/Sunny.jpg";
    }
    else if(icon=="03d" || icon=="03n" || icon=="04d" || icon=="04n"){
        return "/image-background/Foggy.jpg";
    }
    else if(icon=="11d" || icon=="11n" || icon=="09d" || icon=="09n" || icon=="10d" || icon=="10n"){
        return "/image-background/Rainy.jpg";
    }
    else if(icon=="13d" || icon=="13n"){
        return "/image-background/Snowy.jpg";
    }
    else if(icon=="50d" || icon=="50n"){
        return "/image-background/Foggy.jpg";
    }
    else{
        return "/image-background/Night.jpg"
    }
}
// "/video background/Windy.mp4"

// Export the functions for use in other files
module.exports = {
    windDegreeToDirection,KtoCelsius,SelectIcon,SelectBg,getCurrentTime,SelectImgBg
};