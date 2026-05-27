/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;
var authenticationListener; //global variable to store the listener

function fb_authenticate(){
    authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
    // authenticate with Google
}

function fb_handleLogin(_user){
    if (_user){
        console.log("User is logged in. ")
    } else {
        alert("User is Not logged in - Starting the popup process")
        fb_popupLogin();
    }
}

function fb_popupLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_user = result.user; //save the user details object to a global variable
        console.log("User has logged in")
    });
};

function fb_logout(){
    authenticationListener(); //this line turns off the listener
    firebase.auth().signOut();
    console.log("logged out")
};

function fb_write(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const displayName = document.getElementById("name").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;
    const userID = GLOBAL_user.uid
    console.log(displayName + "'s favourite fruit is " + favoriteFruit + ". " + fruitQuantity + " serving(s) per week!")

    firebase.database().ref('/users/' + userID).set(
        {
            username: displayName,
            fruit: favoriteFruit,
            quantity: fruitQuantity
        }
    )
}
function fb_sendEmail(){
    const userEmail = GLOBAL_user.email
    const userUID = GLOBAL_user.uid
    window.open('mailto:'+ userEmail);
    alert('check your mail!')  
    console.log(userUID)  
    console.log("To: " + userEmail + ", welcome!")
}

function fb_error(){
    // Don't forget your error handling!
}