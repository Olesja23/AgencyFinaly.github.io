const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();

const navEl = document.querySelector('.nav');
const faEl = document.querySelector('.fa-bars');
const closeSection = document.querySelector('.top__section');
const closeEl = document.querySelector('.close__icon');

const home = document.querySelector('.home');
const headEl = document.querySelector('.head');
const portfolio = document.querySelector('.portfolio');
const portfolioEl = document.querySelector('.service__box');
const about = document.querySelector('.about__us');
const meetEl = document.querySelector('.meet');
const contacts = document.querySelector('.contacts');
const getContactEl = document.querySelector('.get__contacts');
const contactsButton = document.querySelector('.button__top'); 


footerYearEl.textContent = year;
// Обновление года

faEl.addEventListener('click', function (e) {
        navEl.style.left = 0;
});
closeSection.addEventListener('click', function (e) {
        navEl.style.left = '-100%';
});
closeEl.addEventListener('click', function (e) {
        navEl.style.left = '-100%';
});
// Открытие/закрытие бургерного меню

home.addEventListener('click', () => {
        headEl.scrollIntoView({
                behavior: "smooth"
        });
});

portfolio.addEventListener('click', () => {
        portfolioEl.scrollIntoView({
                behavior: "smooth"
        });
});

about.addEventListener('click', () => {
        meetEl.scrollIntoView({
                behavior: "smooth"
        });
});

contacts.addEventListener('click', () => {
        getContactEl.scrollIntoView({
                behavior: "smooth"
        });
});

contactsButton.addEventListener('click',  () => {
        getContactEl.scrollIntoView({
                behavior: "smooth"
        });
});
// Scroll