import { renderHeader } from './header.js';
import { createHTMLElement, clearContent } from './index.js';

const renderContactPage = () => {
    clearContent();
    renderHeader('contact');

    const contentContainer = document.getElementById("content");
    const contactHero = createHTMLElement('div', ['contact-hero']);
    const contactContainer = createHTMLElement('div', ['contact-container']);
    const h1 = createHTMLElement('h1', [], '⏤Location⏤');
    const location = createHTMLElement('div', ['location-content'], '123 Oxford Street ⏤ London, UK');
    const secondh1 = createHTMLElement('h1', [], '⏤Our Hours⏤');
    const hoursContent = createHTMLElement('div', ['hours-content']);
    const p1 = createHTMLElement('p', ['hour'], 'Monday - Friday | 7AM-6PM');
    const p2 = createHTMLElement('p', ['hour'], 'Saturday | 8AM-6PM');
    const p3 = createHTMLElement('p', ['hour'], 'Sunday | 9AM-5PM');
    const thirdh1 = createHTMLElement('h1', [], '⏤Call Us⏤');
    const phoneContent = createHTMLElement('div', ['phone-content'], '20-7946-0279');

    const hours = [p1, p2, p3];
    hours.forEach(hour => hoursContent.appendChild(hour));

    const content = [ h1, location, secondh1, hoursContent, thirdh1, phoneContent];
    content.forEach(item => contactContainer.appendChild(item));

    contentContainer.appendChild(contactHero);
    contentContainer.appendChild(contactContainer);
}

export { renderContactPage }