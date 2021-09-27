var firebaseConfig = {
    apiKey: "AIzaSyCHk3bTc09LHR3_dtkN3FEkmSWZWHjYqd4",
    authDomain: "chitchatter1-df0ee.firebaseapp.com",
    databaseURL: "https://chitchatter1-df0ee-default-rtdb.firebaseio.com",
    projectId: "chitchatter1-df0ee",
    storageBucket: "chitchatter1-df0ee.appspot.com",
    messagingSenderId: "113309113876",
    appId: "1:113309113876:web:b872e1bbc9ec45db6ed101"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    username = document.getElementById("user_name").value;
    firebase.databse().ref("/").child(useranme).update({
        purpose: "add user"
    });
}

function logout() {
    window.location = "index.html";
}