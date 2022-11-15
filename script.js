//List of restaurants
let restaurants = new Array
(
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
);

function getRanRest() {    
    // window.confirm(Restaurants[~~(Math.random() * Restaurants.length)]);
    document.getElementById("printRest").innerHTML = (restaurants[~~(Math.random() * restaurants.length)]);
}

// //Get user input
// let name = window.prompt("Enter restaurant name: ");
// alert(onclick);