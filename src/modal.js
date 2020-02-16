import { createHTMLElement, clearContent } from './index.js';

const renderModal = () => {
    document.body.style.background = 'rgb(62, 62, 62)';
    const modal = createHTMLElement('div', ['modal', 'active']);
    const modalContents = createHTMLElement('div', ['modal-contents']);
    const hamburger = createHTMLElement('div', ['hamburger', 'active']);
    const h1 = createHTMLElement('h1', ['homebtn'], 'Home');
    const secondh1 = createHTMLElement('h1', ['aboutbtn'], 'About');
    const thirdh1 = createHTMLElement('h1', ['menubtn'], 'Menu');
    const fourthh1 = createHTMLElement('h1', ['contactbtn'], 'Contact');

    const contents = [hamburger, h1, secondh1, thirdh1, fourthh1];
    contents.forEach(item => modalContents.appendChild(item));

    modal.appendChild(modalContents);
    document.body.appendChild(modal);
}

const closeModal = () => {
    /* Reset body background color based on the page that is being displayed */
    (document.body.style.color == 'white') ? document.body.style.background = '' : document.body.style.background = 'white';
    /* Reset hamburger menu display */
    const hamburger = document.querySelector('.hamburger.active');
    if (hamburger) {
        hamburger.classList.remove('active');
    }
    /* Delete Modal DOM Element */
    const modal = document.querySelector('.modal.active');
    if (modal) {
        modal.remove();
    }
    /* Re-display contentContainer */
    const contentContainer = document.getElementById("content");
    contentContainer.classList.remove('inactive');
}

export { renderModal, closeModal }