const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuOverlay = menu.querySelector('.menu__overlay'),
      closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        menu.classList.toggle('active');
    }
});

menuOverlay.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 500 ){
            $(".sidepanel__icon").css("color", "rgb(6, 35, 4)");
			$(".sidepanel__divider").css("background-color", "rgb(6, 35, 4)");
			$(".sidepanel__text").css("color", "rgb(6, 35, 4)");
		}  else {
			$(".sidepanel__icon").css("color", "white");
			$(".sidepanel__divider").css("background-color", "white");
			$(".sidepanel__text").css("color", "white");
		} 
    });
}); 

$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 800);
    return false;
});

$(".promo__link").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 800);
    return false;
});

$(".menu__link a").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 800);
    return false;
});

const sendBtn = document.querySelector('.contacts__btn');

sendBtn.addEventListener('click', () => {
    alert(`
    Sorry, I'm not yet eighteen and I can't be responsible for your details. 
    Please write to me on one of the above social networks. 
    Thanks for understanding!`);
});