//Activity 1
window.onload=function(){alert("Hello World");};

//Activity 2
let personName = "Sophia Garcia";
let jobTitle = "Data Scientist";
let favoriteHobby = "Photography";
let homeCity = "San Francisco";

let age = 32;
let yearsOfExperience = 7;
let numberOfSiblings = 2;

let isMarried = true;
let hasPets = false;

let heightMeters = 1.70; 
let accountBalance = 52750.50; 


let middleName; 


let spouseName = "Carlos"; 


const country = "United States"; 


console.log("Person's name is " + personName);
console.log("Job title is " + jobTitle);
console.log("Favorite hobby is " + favoriteHobby);
console.log("Home city is " + homeCity);

console.log("Age is " + age);
console.log("Years of experience in their field: " + yearsOfExperience);
console.log("Number of siblings: " + numberOfSiblings);

console.log("Is married: " + isMarried);
console.log("Has pets: " + hasPets);

console.log("Height in meters: " + heightMeters);
console.log("Account balance in USD: " + accountBalance);

console.log("Middle name is " + middleName); 
console.log("Spouse's name is " + spouseName); 

console.log("Country of residence: " + country);

//Activity 3
let toDoList = [
    "Finish writing a new chapter",
    "Do laundry",
    "Practice guitar for an hour",
    "Call a friend",
    "Plan meals for the week",
    "Work on side project"
];


let laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    screenSize: "13 inches",
    color: "Space Gray",
    batteryLevel: 85,
    isTouchScreen: false
};


console.log("To-do list for today:");
for (let i = 0; i < toDoList.length; i++) {
    console.log(`${i + 1}. ${toDoList[i]}`);
}

console.log("\nDescription of my laptop:");
console.log("Brand:", laptop.brand);
console.log("Model:", laptop.model);
console.log("Screen size:", laptop.screenSize);
console.log("Color:", laptop.color);
console.log("Battery level:", laptop.batteryLevel + "%");
console.log("Is it a touch screen laptop?", laptop.isTouchScreen);



