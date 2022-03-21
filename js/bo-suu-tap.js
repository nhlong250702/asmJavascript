var arrSlide = [
    "0.JPG", "1.JPG", "2.JPG", "3.JPG", "4.JPG",
    "5.JPG", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
    "10jpg.", "11.jpg", "12.jpg", "13.jpg", "14.jpg",
    "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
];

var i = 0;
var vSlideImg = document.getElementById("mySlide");

function fNext() {
    i++;
    if (i >= arrSlide.length) i = 0;
    vSlideImg.src = "../images/" + arrSlide[i];
}