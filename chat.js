var firebaseConfig = {
    apiKey: "AIzaSyAurtfmVS3pVwhJ48_WEEWFX-ahL2SpGBg",
    authDomain: "lets-chat-web-app-ac411.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-ac411-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-ac411",
    storageBucket: "lets-chat-web-app-ac411.appspot.com",
    messagingSenderId: "1083484296493",
    appId: "1:1083484296493:web:ac31b2021a8488a1aeafa4"
  };
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
}



