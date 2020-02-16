import { createHTMLElement } from './index.js';

const renderHeader = (page) => {
    const contentContainer = document.getElementById("content");
    const navHome = createHTMLElement('div', ['nav', `${page}`]);
    const hamburger = createHTMLElement('div', (page === 'home') ? ['hamburger'] : ['blkhamburger']);
    const titleContainer = createHTMLElement('div', ['title-container']);
    const title = createHTMLElement('a', ['title'], 'LONDON CAFÉ');
    const navTabs = createHTMLElement('div', ['nav-tabs', `${page}`]);
    const home = createHTMLElement('a', ['home'], 'Home');
    const about = createHTMLElement('a', ['about'], 'About');
    const menu = createHTMLElement('a', ['menu'], 'Menu');
    const contact = createHTMLElement('a', ['contact'], 'Contact');

    titleContainer.appendChild(title);

    const tabsContent = [home, about, menu, contact];
    tabsContent.forEach(item => navTabs.appendChild(item));

    const content = [hamburger, titleContainer, navTabs];
    content.forEach(item => navHome.appendChild(item));

    contentContainer.appendChild(navHome);
}

export { renderHeader }