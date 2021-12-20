function log_in(){;
if (localStorage.getItem("username") == document.getElementById("username").value && localStorage.getItem("passcode") == document.getElementById("passcode").value){
    window.location="let`s_chat_room.html";
}

}

function enter_sign_in(){
    document.getElementById("enter_sign_in").style.display="none";
    document.getElementById("enter_login").style.display="inline-block";
    document.getElementById("login").style.display="none";
    document.getElementById("sign_in").style.display="inline-block";
}

function enter_login(){
    document.getElementById("enter_sign_in").style.display="inline-block";
    document.getElementById("enter_login").style.display="none";
    document.getElementById("login").style.display="inline-block";
    document.getElementById("sign_in").style.display="none";
}

function sign_in(){
    usernameEnterd = document.getElementById("username").value;
    passcodeEnterd = document.getElementById("passcode").value;
   localStorage.setItem("username",usernameEnterd);
   localStorage.setItem("passcode",passcodeEnterd);
   window.location="https://manas-2010.github.io/muice-app-last-turn/";

}