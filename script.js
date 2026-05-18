
console.log("Running Sal's Strawberries")

function fb_write(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const username = document.getElementById("name").value;
    console.log(username + "'s favourite fruit is " + favoriteFruit)
    firebase.database().ref('/').set(
    {
    users: {
        username: {
            fruit: favoriteFruit
            }
        }
      }
  )
}


