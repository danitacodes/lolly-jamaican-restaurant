const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');

hamburgerMenu.addEventListener('click', ()=> {
    navContent.classList.add('show');
})

closeNavButton.addEventListener('click', ()=> {
    navContent.classList.remove('show');
})

