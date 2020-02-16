import { renderHeader } from './header.js';
import { createHTMLElement, clearContent } from './index.js';
import { drinkMenu, foodMenu } from './menulist.js';

const createNewMenuItem = (menuItem) => {
    const menuElement = createHTMLElement('div', ['menu-item']);
    const menuName = createHTMLElement('p', ['menu-name'], menuItem.name);
    const menuPrice = createHTMLElement('p', ['menu-price'], menuItem.price);
    const menuDescript = createHTMLElement('p', ['menu-description'], menuItem.description);

    const menuInfo = [menuName, menuPrice, menuDescript];
    menuInfo.forEach(item => menuElement.appendChild(item));
    return menuElement;
}

const renderMenuPage = () => {
    clearContent();
    renderHeader('menu');

    const contentContainer = document.getElementById("content");
    const menuHero = createHTMLElement('div', ['menu-hero']);
    const menuContainer = createHTMLElement('div', ['menu-container']);
    const h1 = createHTMLElement('h1', ['drink-header'], '⏤Drink Menu⏤');
    const drinkMenuContainer = createHTMLElement('div', ['drink-menu']);
    const secondh1 = createHTMLElement('h1', ['food-header'], '⏤Breakfast Menu⏤');
    const foodMenuContainer = createHTMLElement('div', ['food-menu']);

    drinkMenu.forEach(menuItem => drinkMenuContainer.appendChild(createNewMenuItem(menuItem)));
    foodMenu.forEach(menuItem => foodMenuContainer.appendChild(createNewMenuItem(menuItem)));

    const content = [ h1, drinkMenuContainer, secondh1, foodMenuContainer ];
    content.forEach(item => menuContainer.appendChild(item));

    contentContainer.appendChild(menuHero);
    contentContainer.appendChild(menuContainer);
}

export { renderMenuPage }