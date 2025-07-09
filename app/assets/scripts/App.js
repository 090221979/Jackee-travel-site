import'../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
new RevealOnScroll(document.querySelectorAll(".testimonial"),60);



if(module.hot)
    {
        module.hot.accept()
    }

/* my work for lesson 41 on webpack by brad schiff */

