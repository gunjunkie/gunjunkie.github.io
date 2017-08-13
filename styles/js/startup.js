var slideIndex = 0;
var timer = null;
// showSlides(); autosliding.

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("ImageView");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "inline-block";
    timer = setTimeout(showSlides, 6000); // Change image every 2 seconds
}

function carouselNext(){
    var i;
    var slides = document.getElementsByClassName("ImageView");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "inline-block";
    clearTimeout(timer);
    // timer = setTimeout(showSlides, 6000);
}
