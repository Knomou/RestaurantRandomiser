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
function getRanRest() {    
    // window.confirm(Restaurants[~~(Math.random()) * Restaurants.length]);
    window.confirm(Restaurants[Math.floor(Math.random() * Restaurants.length)]);
}
