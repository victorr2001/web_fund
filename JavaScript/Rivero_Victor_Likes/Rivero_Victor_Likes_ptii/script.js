var neilLikes = 0;
var neilCount = document.querySelector("#neilCount");
var nicLikes = 0;
var nicCount = document.querySelector("#nicCount");
var jimLikes = 0;
var jimCount = document.querySelector("#jimCount");

function addNeilLikes(){
    neilLikes++;
    neilCount.innerHTML = neilLikes + " Like(s)";
}

function addNicLikes(){
    nicLikes++;
    nicCount.innerHTML = nicLikes + " Like(s)";
}

function addJimLikes(){
    jimLikes++;
    jimCount.innerHTML = jimLikes + " Like(s)";
}
