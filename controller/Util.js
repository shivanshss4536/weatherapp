function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}`;
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

function KtoCelsius(Ktemp){
    const Decimaltemp=Ktemp-273;
    const temp=Decimaltemp.toFixed(1);
    return temp;
}

function SelectIcon(icon){
    if(icon=="01d"){
        return "/Icons/clear-day.svg";
    }
    else if(icon=="01n"){
        return "/Icons/clear-night.svg";
    }
    else if(icon=="01n"){
        return "/Icons/clear-night.svg";
    }
    else if(icon=="02d"){
        return "/Icons/few cloud-night.svg";
    }
    else if(icon=="02n"){
        return "/Icons/few cloud-night.svg";
    }
    else if(icon=="03d" || icon=="03n"){
        return "/Icons/scattered clouds.svg";
    }
    else if(icon=="04d" || icon=="04n"){
        return "/Icons/broken clouds.svg";
    }
    else if(icon=="09d" || icon=="09n"){
        return "/Icons/shower rain.svg";
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

// Export the functions for use in other files
module.exports = {
    formatDate,windDegreeToDirection,KtoCelsius,SelectIcon
};