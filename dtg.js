// Day Trip Generator

// create arrays with data for (destination, restaurant, transport and entertainment)

let destinationArray = ['Egypt', 'Mars', 'Fiji', 'Graceland'];
let restaurantArray = ['American', 'Chinese', 'Italian', 'Indian'];
let transportationArray = ['Plane', 'Train', 'Automobile', 'Rickshaw'];
let entertainmentArray = ["Live Music", 'Midget Wrestling', 'Poetry Slam', 'Football Game'];

// console.log(destinationArray);
// console.log(restaurantArray);
// console.log(transportationArray);
// console.log(entertainmentArray);


// // Function to randomly select a choice from each array 

function selectRandom(choiceArray){
    return choiceArray[Math.floor(Math.random()*choiceArray.length)];

}

let destination = selectRandom(destinationArray);
let restaurant = selectRandom(restaurantArray);
let transport = selectRandom(transportationArray);
let entertain = selectRandom(entertainmentArray);
// console.log(destination, restaurant, transport, entertain);