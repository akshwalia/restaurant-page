import './style.css'
import {displayMenu, removeMenu} from './menu.js';

function Displayhomepage() {
    const header = document.createElement('div');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const headerMenu = document.createElement('div');

    const tabs = document.createElement('div');
    const menu = document.createElement('div');
    const home =document.createElement('div');
    const about = document.createElement('div');

    title.innerHTML = "The APJ Restaurant";
    description.innerHTML = "where flavor meets friends";
    headerMenu.innerHTML = "Check out our menu";

    menu.innerHTML = "Menu";
    home.innerHTML = "Home";
    about.innerHTML = "About";

    header.classList.add('header');
    title.classList.add('title');
    description.classList.add('description');
    headerMenu.classList.add('menu');

    tabs.classList.add('tabs');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');
    home.classList.add('home');
    about.classList.add('about');

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(about);

    header.appendChild(title);
    header.appendChild(description);
    header.appendChild(headerMenu);

    document.body.appendChild(tabs);
    document.body.appendChild(header);
}

Displayhomepage();

const menubuttons = document.querySelectorAll('.menu');

menubuttons.forEach(btn => {
    btn.addEventListener('click',displayMenu);
});

const home = document.querySelector('.home');

home.addEventListener('click', removeMenu);

