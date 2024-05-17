document.addEventListener("DOMContentLoaded", function () {
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        carouselSlides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });
        currentSlide = slideIndex;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
});
