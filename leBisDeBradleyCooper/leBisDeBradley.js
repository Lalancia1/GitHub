alert("hello word!");
var idImage1=document.getElementById("image1");
var idImage2=document.getElementById("image2");
function start() {
    var idImage1 = document.getElementById("image1");
    var idImage2 = document.getElementById("image2");

    var intervalId = setInterval(function () {
        idImage2.style.visibility = 'visible';
        idImage1.style.visibility = 'hidden';
    }, 200);
}