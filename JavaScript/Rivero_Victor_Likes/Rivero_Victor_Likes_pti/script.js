var likes = 0;
var likeCount = document.querySelector(".likeCount");

function addLikes(){
    likes++;
    likeCount.innerHTML = likes + " Like(s)";
}