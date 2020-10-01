document.addEventListener('DOMContentLoaded', (function() {
    'use strict';

    // based on <https://technokami.in/3d-hover-effect-using-javascript-animations-css-html>
    function initCards() {
        let cards = document.querySelectorAll('.single-card');

        // throttle the rate at which moveHandler updates (delay is in milliseconds)
        function throttleMoveHandler(delay) {
            let time = Date.now();

            return function(e) {
                if ((time + delay - Date.now()) < 0) {
                    moveHandler(e);
                    time = Date.now();
                }
            };
        }

        function moveHandler(event) {
            // get position of mouse cursor within element
            let rect = event.currentTarget.getBoundingClientRect(),
                xVal = event.clientX - rect.left,
                yVal = event.clientY - rect.top;

            // calculate rotation value along the axes
            const multiplier = 25,
                cardWidth = event.currentTarget.clientWidth,
                cardHeight = event.currentTarget.clientHeight,
                yRotate = multiplier * ((xVal - cardWidth / 2) / cardWidth),
                xRotate = -multiplier * ((yVal - cardHeight / 2) / cardHeight);

            // generate string for transform and apply styles
            const transform = `perspective(750px) scale(1.1) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;

            event.currentTarget.style.transform = transform;
            event.currentTarget.classList.add('card-hover');
        }

        // when viewport is < 500px the cards are full width and should not rotate
        // too lazy to use ResizeObserver
        if (document.body.clientWidth > 500) {
            cards.forEach(card => {
                card.addEventListener('mousemove', throttleMoveHandler(30));
                card.addEventListener('mouseout', function() {
                    card.removeAttribute('style');
                    card.classList.remove('card-hover');
                });
            });
        }
    }

    initCards();
})(), false);

/* toggle suits */
$(document).ready(function() {
    $('.suit-toggle#diamonds').click(function() {
        $('#chosen-diamonds').removeClass("hidden");
        $('#chosen-clubs').addClass("hidden");
        $('#chosen-hearts').addClass("hidden");
        $('#chosen-spades').addClass("hidden");

        $('.suit-toggle#diamonds').removeClass("unselected");
        $('.suit-toggle#clubs').addClass("unselected");
        $('.suit-toggle#hearts').addClass("unselected");
        $('.suit-toggle#spades').addClass("unselected");

        $('.suit-toggle#diamonds').addClass("selected");
        $('.suit-toggle#clubs').removeClass("selected");
        $('.suit-toggle#hearts').removeClass("selected");
        $('.suit-toggle#spades').removeClass("selected");

        $('#triangle-diamonds').removeClass("hidden");
        $('#triangle-clubs').addClass("hidden");
        $('#triangle-hearts').addClass("hidden");
        $('#triangle-spades').addClass("hidden");

        $('#chosen-diamonds').removeClass("hidden-start");
        $('.selected-arrow-wrapper').removeClass("hidden-start");
    });

    $('.suit-toggle#clubs').click(function() {
        $('#chosen-diamonds').addClass("hidden");
        $('#chosen-clubs').removeClass("hidden");
        $('#chosen-hearts').addClass("hidden");
        $('#chosen-spades').addClass("hidden");

        $('.suit-toggle#diamonds').addClass("unselected");
        $('.suit-toggle#clubs').removeClass("unselected");
        $('.suit-toggle#hearts').addClass("unselected");
        $('.suit-toggle#spades').addClass("unselected");

        $('.suit-toggle#diamonds').removeClass("selected");
        $('.suit-toggle#clubs').addClass("selected");
        $('.suit-toggle#hearts').removeClass("selected");
        $('.suit-toggle#spades').removeClass("selected");

        $('#triangle-diamonds').addClass("hidden");
        $('#triangle-clubs').removeClass("hidden");
        $('#triangle-hearts').addClass("hidden");
        $('#triangle-spades').addClass("hidden");

        $('#chosen-diamonds').removeClass("hidden-start");
        $('.selected-arrow-wrapper').removeClass("hidden-start");
    });

    $('.suit-toggle#hearts').click(function() {
        $('#chosen-diamonds').addClass("hidden");
        $('#chosen-clubs').addClass("hidden");
        $('#chosen-hearts').removeClass("hidden");
        $('#chosen-spades').addClass("hidden");

        $('.suit-toggle#diamonds').addClass("unselected");
        $('.suit-toggle#clubs').addClass("unselected");
        $('.suit-toggle#hearts').removeClass("unselected");
        $('.suit-toggle#spades').addClass("unselected");

        $('.suit-toggle#diamonds').removeClass("selected");
        $('.suit-toggle#clubs').removeClass("selected");
        $('.suit-toggle#hearts').addClass("selected");
        $('.suit-toggle#spades').removeClass("selected");

        $('#triangle-diamonds').addClass("hidden");
        $('#triangle-clubs').addClass("hidden");
        $('#triangle-hearts').removeClass("hidden");
        $('#triangle-spades').addClass("hidden");

        $('#chosen-diamonds').removeClass("hidden-start");
        $('.selected-arrow-wrapper').removeClass("hidden-start");
    });

    $('.suit-toggle#spades').click(function() {
        $('#chosen-diamonds').addClass("hidden");
        $('#chosen-clubs').addClass("hidden");
        $('#chosen-hearts').addClass("hidden");
        $('#chosen-spades').removeClass("hidden");

        $('.suit-toggle#diamonds').addClass("unselected");
        $('.suit-toggle#clubs').addClass("unselected");
        $('.suit-toggle#hearts').addClass("unselected");
        $('.suit-toggle#spades').removeClass("unselected");

        $('.suit-toggle#diamonds').removeClass("selected");
        $('.suit-toggle#clubs').removeClass("selected");
        $('.suit-toggle#hearts').removeClass("selected");
        $('.suit-toggle#spades').addClass("selected");

        $('#triangle-diamonds').addClass("hidden");
        $('#triangle-clubs').addClass("hidden");
        $('#triangle-hearts').addClass("hidden");
        $('#triangle-spades').removeClass("hidden");

        $('#chosen-diamonds').removeClass("hidden-start");
        $('.selected-arrow-wrapper').removeClass("hidden-start");
    });
});