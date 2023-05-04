// Swiper init
var swiper = new Swiper(".swiper-feedback", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Search modal & Burger Menu
const searchBtn = document.getElementById('search-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const modalSearch = document.querySelector('.modal-search');
const headerNav = document.querySelector('.header__nav');
const headerNavClose = document.querySelector('.header__nav-close');
const burger = document.querySelector('.burger');
const headerLinks = document.getElementsByClassName('header__link');
const openClass = 'open';

const toggleOverlay = () => {
    overlay.classList.toggle(openClass);
}
const toggleSearchInput = () => {
    modalSearch.classList.toggle(openClass);
}
const toggleSearchModal = () => {
    if (headerNav.classList.contains(openClass)) {
        toggleMenu();
        toggleSearchInput();
        headerNavClose.classList.remove(openClass);

        return;
    }

    toggleOverlay();
    toggleSearchInput();
}

const closeModals = () => {
    overlay.classList.remove(openClass);
    modalSearch.classList.remove(openClass);
    headerNav.classList.remove(openClass);
    headerNavClose.classList.remove(openClass);
}

searchBtn.addEventListener('click', toggleSearchModal);
if (closeBtn) {
    closeBtn.addEventListener('click', toggleSearchModal);
}
if (overlay) {
    overlay.addEventListener('click', closeModals);
}

const toggleBurgerBtn = () => {
    headerNavClose.classList.toggle(openClass);
}
const toggleMenu = () => {
    headerNav.classList.toggle(openClass);
}

const mapNavLinks = () => {
    Array.from(headerLinks).map(el => el.addEventListener('click', toggleNav));
}
const toggleNav = () => {
    toggleOverlay();
    toggleMenu();
    toggleBurgerBtn();
    mapNavLinks();
}

burger.addEventListener('click', toggleNav);
headerNavClose.addEventListener('click', toggleNav);

