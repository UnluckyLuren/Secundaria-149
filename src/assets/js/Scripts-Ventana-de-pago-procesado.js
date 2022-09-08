const open = document.getElementById( 'open'); 
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

// close.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// });


/* Mostrar menu emergente */

const Menu_emergente_Open = document.getElementById('Menu-emergente-image'),
    Menu_emergente = document.getElementById('Menu-emergente'),
    Body_scroll = document.getElementById('Body-scroll')

Menu_emergente_Open.addEventListener('click', () => {

        Body_scroll.classList.toggle('body-scroll')
        Menu_emergente.style.display ="inline"
        Menu_emergente.classList.toggle('Look-menu-emergente')

})
