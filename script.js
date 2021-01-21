$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["an Artist", "a Developer", "an Illustrator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    $(".logo").click(function(){
        location.replace("https://www.saikat.in")
    });

    $(".instagram").click(function(){
        location.replace("https://instagram.com/saikat._")
    });

    $(".home-btn").click(function(){
        location.href = "#home"
    });

    $(".about-btn").click(function(){
        alert("This website is underdevelopement")
    });

    $(".gallery-btn").click(function(){
        location.href = "#gallery"
    });

    $(".sda-btn").click(function(){
        alert("This website is underdevelopement")
    });

    $(".contact-btn").click(function(){
        alert("This website is underdevelopement")
    });

});