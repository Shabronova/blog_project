  // mobile menu 

    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");


    mobileMenu.addEventListener ("click", function (){
        mobileMenu.classList.toggle("active-menu");
        if(mobileMenu.classList.contains("active-menu")) {
            mainMenu.classList.add("active-menu");
        } else {
            mainMenu.classList.remove("active-menu");
        }
    });

// slider 

$(document).ready (function (){
    $('.slider_block').slick({
        arrows: false,
        dots: true,
        speed: 2000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: $('.dots'),
    });


})