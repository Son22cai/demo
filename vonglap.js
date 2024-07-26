const carousel = document.querySelector('.carousel');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;
        let intervalId;

        function moveSlide(direction) {
            currentIndex = (currentIndex + direction + slides.length - 4) % (slides.length - 4);
            updateCarousel();
        }

        function updateCarousel() {
            carousel.style.transform = `translateX(calc(-${currentIndex * 20}% - ${currentIndex * 10}px))`;
        }

        function startAutoSlide() {
            intervalId = setInterval(() => moveSlide(1), 3000);
        }

        function stopAutoSlide() {
            clearInterval(intervalId);
        }

        prevButton.addEventListener('click', () => {
            stopAutoSlide();
            moveSlide(-1);
            startAutoSlide();
        });

        nextButton.addEventListener('click', () => {
            stopAutoSlide();
            moveSlide(1);
            startAutoSlide();
        });

        startAutoSlide();