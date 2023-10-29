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
// Export the functions for use in other files
module.exports = {
    formatDate,windDegreeToDirection,KtoCelsius
};