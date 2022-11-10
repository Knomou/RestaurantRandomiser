const Restaurants = [
    "Gyusha",
    "Musou",
    "Kogi",
    "Yakiniku Yokocho",
    "Butter",
    "Spice Temple",
    "Dolar Shop",
    "Izu Village",
    "Black Bar and Grill",
    "Rockpool",
    "6 Head",
    "Sokyo",
    "Masuya Suisan",
    "Koi",
    "Laduree"
]

//Pushes out message via button click

const element = document.getElementById("RandomiseButton");
document.addEventListener("click", getRanRest);

function getRanRest() {    
    // window.confirm(Restaurants[~~(Math.random() * Restaurants.length)]);
    document.getElementById("printRest").innerHTML = (Restaurants[~~(Math.random() * Restaurants.length)]);
}

// //Get user input
// let name = window.prompt("Enter restaurant name: ");
// alert(onclick);