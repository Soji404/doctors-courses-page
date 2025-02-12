document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".reviews-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        },
        on: {
            init: function () {
                equalizeCardHeights();
            },
            slideChangeTransitionEnd: function () {
                equalizeCardHeights();
            }
        }
    });

    function equalizeCardHeights() {
        let maxHeight = 0;
        
        document.querySelectorAll(".review-card").forEach(card => {
            card.style.height = "auto";
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        document.querySelectorAll(".review-card").forEach(card => {
            card.style.height = maxHeight + "px";
        });
    }

    window.addEventListener("resize", equalizeCardHeights);
});