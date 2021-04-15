const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');

hamburgerMenu.addEventListener('click', ()=> {
    navContent.classList.add('show');
});