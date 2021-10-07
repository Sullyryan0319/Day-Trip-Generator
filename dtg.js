// // Day Trip Generator



// // create arrays with data for (destination, restaurant, transport and entertainment)

let destinationArray = ['Egypt', 'Mars', 'Fiji', 'Graceland'];
let restaurantArray = ['American', 'Chinese', 'Italian', 'Indian'];
let transportationArray = ['Plane', 'Train', 'Automobile', 'Rickshaw'];
let entertainmentArray = ["Live Music", 'Midget Wrestling', 'Poetry Slam', 'Football Game'];


// // Function to randomly select a choice from each array 

function selectRandom(choiceArray) {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];

}

let destination = selectRandom(destinationArray);
let restaurant = selectRandom(restaurantArray);
let transport = selectRandom(transportationArray);
let entertain = selectRandom(entertainmentArray);
console.log(destination, restaurant, transport, entertain);


// // function that allows user to re-select any or all of the random choices

let itineraryArray = [destination, restaurant, transport, entertain];

let isUserHappy = false;
let presentTrip;


while (isUserHappy === false) {

    presentTrip = "Your destination will be " + itineraryArray[0] + ", your restaurant will be " + itineraryArray[1] +
        ", your transportation will be " + itineraryArray[2] + ", and your entertainment will be " + itineraryArray[3];
    alert(presentTrip);

    let userInput = prompt("Please select one of the options:"
        + "1 for new location "
        + ", 2 for new restaurant "
        + ", 3 for new transportation "
        + ", 4 for new entertainment "
        + ", 5 to start fresh "
        + ", 6 to confirm selections");
    if (userInput === "1") {
        itineraryArray[0] = selectRandom(destinationArray);
    } else if (userInput === "2") {
        itineraryArray[1] = selectRandom(restaurantArray);
    } else if (userInput === "3") {
        itineraryArray[2] = selectRandom(transportationArray);
    } else if (userInput === "4") {
        itineraryArray[3] = selectRandom(entertainmentArray);
    } else if (userInput === "5") {
        itineraryArray[0] = selectRandom(destinationArray);
        itineraryArray[1] = selectRandom(restaurantArray);
        itineraryArray[2] = selectRandom(transportationArray);
        itineraryArray[3] = selectRandom(entertainmentArray);
    } else if (userInput === "6") {
        isUserHappy = true;
        alert("Trip Confirmed! " + presentTrip);
        break;

    } else {
        alert("Please enter a valid number.");

    }


}
console.log(presentTrip);

