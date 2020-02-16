import { createHTMLElement, clearContent } from './index.js';
import { renderHeader } from './header.js';

const renderHomePage = () => {
    clearContent();
    renderHeader('home');

    document.body.style.color = 'white';
    document.body.style.background = '';

    const contentContainer = document.getElementById("content");
    const homeBody = createHTMLElement('div', ['home-body']);
    const bodyTitle = createHTMLElement('h1', ['bodytitle'], '⏤LONDON CAFÉ⏤');
    const address = createHTMLElement('h2', ['address'], '123 Oxford Street ⏤ London, UK');
    const viewMenu = createHTMLElement('div', ['view-menu'], 'VIEW MENU');
    
    const content = [bodyTitle, address, viewMenu];
    content.forEach(item => homeBody.appendChild(item));
    
    contentContainer.appendChild(homeBody);
}

export { renderHomePage }