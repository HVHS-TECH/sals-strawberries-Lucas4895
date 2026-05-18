
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    let username = document.getElementById("name").value;
}

function usersFavouriteFruits(){
  console.log("Users' favourite fruits")
  firebase.database().ref('/').set(
    {
    users: {
        username: {
            favoriteFruit: "favoriteFruit"
        }
        }
      }
  )
}
