
console.log("Running Sal's Strawberries")

function fb_write(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const username = document.getElementById("name").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;
    console.log(username + "'s favourite fruit is " + favoriteFruit + ". " + fruitQuantity + " serving(s) per week!")

    firebase.database().ref('/users/' + username).set(
        {
            fruit: favoriteFruit,
            servingsPerWeek: fruitQuantity,
        }
    )
}

