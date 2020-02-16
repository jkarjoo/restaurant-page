import { renderHeader } from './header.js';
import { createHTMLElement, clearContent } from './index.js';

const renderAboutPage = () => {
    clearContent();
    renderHeader('about');

    const contentContainer = document.getElementById("content");
    const aboutHero = createHTMLElement('div', ['about-hero']);
    const aboutContainer = createHTMLElement('div', ['about-container']);
    const h1 = createHTMLElement('h1', [], '⏤About Us⏤');
    const aboutContent = createHTMLElement('div', ['about-content'], 'The London Café is a small Bakery & Coffee Shop located in the heart of the United Kingdom. Our goal is to provide delicious food and also an amazing atmosphere for all of our guests. Our modern lounge area has plenty of seating for both large and small parties, just call ahead for reservations. We hope to see you soon!');
    const aboutMenuBtn = createHTMLElement('div', ['about-menu-btn'], 'View Menu');

    const content = [ h1, aboutContent, aboutMenuBtn];
    content.forEach(item => aboutContainer.appendChild(item));

    contentContainer.appendChild(aboutHero);
    contentContainer.appendChild(aboutContainer);
}

export { renderAboutPage }