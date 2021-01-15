const hamburgerMenu = document.querySelector('#hamburger-menu');
const header = document.querySelector('#header');
const overlay = document.querySelector('#overlay');
const fadeEls = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
        // close hamburger menu
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('stop-scroll');
        fadeEls.forEach(el => {
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        })
        
    } else {
        //open hamburger menu
    header.classList.add('open');
    body.classList.add('stop-scroll');
    fadeEls.forEach(el => {
        el.classList.add('fade-in');
        el.classList.remove('fade-out');
    });
   
    }
});