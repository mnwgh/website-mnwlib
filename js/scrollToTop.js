// get button
let top__btn = document.getElementById("scroll__to__top");

// when user scrolls down, show the button
window.onscroll = function() {scrollFunction()};

// scroll to top function
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { top__btn.style.display = "block"; }
    else { top__btn.style.display = "none"; }
}

// when user clicks on button, scroll to top
function topFunction() {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // chrome, firefox, explorer, opera
}