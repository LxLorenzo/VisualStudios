const menu = document.querySelector('.menu-toggler');
const nav = document.querySelector('.nav__bar');
menu.addEventListener('click', () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
});

let answers=document.querySelectorAll('.faq__layout');
answers.forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    })
})

const sr = ScrollReveal({
    origin: 'right',
    distance: '120px',
    duration: 1500,
    delay: 200,
    reset: true
});

sr.reveal('.introduction__description', {origin:'left'});
sr.reveal('.introduction__title', {origin:'left', delay:300});
sr.reveal('.introduction__text', {origin:'left', delay:400});
sr.reveal('.introduction__img', {delay:500});
sr.reveal('.introduction__button__container', {origin:'left', delay:600})
sr.reveal('.header', {origin:'top'});
sr.reveal('.services__title', {origin:'left'})
sr.reveal('.services__card', {origin:'bottom'})
sr.reveal('.knowourwork__img__container');
sr.reveal('.knowourwork__title', {origin:'left'})
sr.reveal('.knowourwork__text', {origin:'left'});
sr.reveal('.faq__title', {origin:'left'});
sr.reveal('.faq__layout');
sr.reveal('.contact__title', {origin:'left'});
sr.reveal('#nome', {origin:'left'});
sr.reveal('#assunto', {delay: 250});
sr.reveal('#email', {origin: 'left', delay: 300});
sr.reveal('#msg', { delay: 350});
sr.reveal('.contact__button__container', {origin:'bottom'});

var myNav = document.getElementById('header');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myNav.classList.add("transparent");
    } 
    else {
        myNav.classList.remove("transparent");
    }
};

const link = document.querySelector('.nav__link');
link.addEventListener('click', () => {
    if (menu.classList.contains("active") && nav.classList.contains("active")) {
        nav.classList.remove("active");
        menu.classList.remove("active");
    }
});