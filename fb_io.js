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
        console.log("User is Not logged in - Starting the popup process")
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



function fb_sendEmail(){
    const userEmail = GLOBAL_user.email
    window.open('mailto:'+ userEmail);
    alert('check your mail!')    
    console.log("To: " + userEmail + ", welcome!")
}

function fb_error(){
    // Don't forget your error handling!
}