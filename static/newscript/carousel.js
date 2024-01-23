   var currentIndex = 0;
var carouselLength = document.getElementById("sixth-container-inner").children.length;
var carouselChildrens = document.getElementById("sixth-container-inner").children;

function updateCarousel() {
    for (var i = 0; i < carouselLength; i++) {
        var newIndex = (i + currentIndex) % carouselLength;
        carouselChildrens[i].style.order = newIndex;

        // Update classes based on the new order
        if (newIndex === 0) {
            carouselChildrens[i].classList.remove("sixth-first", "sixth-second", "sixth-third");
            carouselChildrens[i].classList.add("sixth-first");
        } else if (newIndex === 1) {
            carouselChildrens[i].classList.remove("sixth-first", "sixth-second", "sixth-third");
            carouselChildrens[i].classList.add("sixth-second");
        } else if (newIndex === 2) {
            carouselChildrens[i].classList.remove("sixth-first", "sixth-second", "sixth-third");
            carouselChildrens[i].classList.add("sixth-third");
        }
    }
}

function overlayLeft(){
      currentIndex = (currentIndex - 1 + carouselLength) % carouselLength;
    updateCarousel();
}

function overlayRight(){
    currentIndex = (currentIndex + 1) % carouselLength;
    updateCarousel();
}
updateCarousel()