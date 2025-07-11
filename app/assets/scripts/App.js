import'../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/stickHeader';
// import Modal from './modules/Modal';


new MobileMenu(); //only save to a vairable if you need access to the methods later 
new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
new RevealOnScroll(document.querySelectorAll(".testimonial"),60);
new StickyHeader();
// new Modal();
let modal //used to store the instance of the imported class called Modal

document.querySelectorAll('.open-modal').forEach(el =>
    {//when the button is clicked the modal variable is checked for its type and then the class is loaded if needed
        el.addEventListener('click', e=>
            {
                e.preventDefault()
                if(typeof modal == 'undefined')
                    {
                    import(/*webpackChunkName: "modal"*/'./modules/Modal')
                    .then((x)=>
                        {
                            modal = new x.default()//default() is used because of the way webpack imports files
                            setTimeout(()=>{modal.opentheModal()},20)
                        })
                    .catch(()=> console.log("there was a problem"))
                    }
                    else
                    {
                        modal.opentheModal()
                    }
            })
    })

if(module.hot)
    {
        module.hot.accept()
    }

/* my work for lesson 41 on webpack by brad schiff */

/*store the instances of a class in a variable if your different
  modules would need to interact with each other and for 
  complex projects look up an NPM file called EventEmitter */
