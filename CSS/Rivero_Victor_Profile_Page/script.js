var newName;
var userName = document.querySelector("#userName");
var takeAwayTodd = document.querySelector("#todd_away");
var takeAwayPhil = document.querySelector("#phil_away");
var reqCount = document.querySelector("#request_count");


function signOut(element){
    element.innerHTML = "Sign in";
}

function changeName(){
    newName = prompt("What is your new name?");
    userName.innerText = newName;
}

function removeTodd(){
    takeAwayTodd.remove();
    reqCount.innerText = "1";
}

function removePhil(){
    takeAwayPhil.remove();
    reqCount.innerText = "0";
}

