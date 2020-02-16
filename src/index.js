import { renderHomePage } from './home.js';
import { renderAboutPage } from './about.js';
import { renderContactPage } from './contact.js';
import { renderMenuPage } from './menu.js';
import { renderModal, closeModal } from './modal.js';

const contentContainer = document.getElementById("content");

const createHTMLElement = (type, classNames = [], textContent) => {
    const element = document.createElement(type);

    classNames.forEach(className => {
        element.classList.add(className);
    });

    if (textContent) {
        element.innerHTML = textContent;
    }
    return element;
}

const clearContent = () => {
    contentContainer.innerHTML = '';
}

renderHomePage();

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 768) {
        closeModal();
    }
});

document.addEventListener('click', (event) => {
    let target = event.target.className;
    if (target === 'about' || target === 'menu' || target === 'view-menu' || target === 'about-menu-btn' || 
    target === 'contact' || target === 'aboutbtn' || target === 'menubtn' || target === 'contactbtn') {
        document.body.style.background = 'white';
        document.body.style.color = '#313131';
    }
    if (target === 'about' || target === 'aboutbtn') {
        renderAboutPage();
    }
    else if (target === 'home' || target === 'title' || target === 'homebtn') {
        renderHomePage();
    }
    else if (target === 'menu' || target === 'view-menu' || target === 'about-menu-btn' || target === 'menubtn') {
        renderMenuPage();
    }
    else if (target === 'contact' || target === 'contactbtn') {
        renderContactPage();
    }
    else if (target === 'hamburger' || target === 'blkhamburger') {
        contentContainer.classList.add('inactive');
        renderModal();
    }
    if (target === 'hamburger active' || target === 'blkhamburger active' || target === 'homebtn' ||
    target === 'aboutbtn' || target === 'menubtn' || target === 'contactbtn') {
        closeModal();
    }
});


export { createHTMLElement, clearContent }

