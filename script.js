const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',

];

// elementi del dom con classi items e thumbs
const items = document.querySelector('.items');
const thumbs = document.querySelector('.thumbs-content');

// variabile contenente la stringa delle img in items e thumbs
let itemsContent = '';
let thumbsContent = '';

// definizione array che rappresenta l'immagine
let activeItem = 0;

// pulsanti
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// ciclo l'array per riempire le stringhe in html con le img
for(let i=0; i<images.length; i++) {
    itemsContent += `<div class="item">
                         <img src="./${images[i]}" alt="Active image">
                    </div>`;

    thumbsContent += `<div class="thumb">
                         <img src="./${images[i]}" alt="Active image">
                    </div>`;
}

// inserisco in items e thumbs l'html creato
items.innerHTML = itemsContent;
thumbs.innerHTML = thumbsContent;

// variabile activeItem per applicare la classe active
document.getElementsByClassName('item')[activeItem].classList.add('active');
document.getElementsByClassName('thumb')[activeItem].classList.add('active');

// click sul div prev
prev.addEventListener('click', function (){
    if(activeItem === 0) {
        activeItem = images.length - 1;
    }
    else {
        activeItem--;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active');
});

// click sul div next
next.addEventListener('click', function (){
    if(activeItem === images.length -1) {
        activeItem = 0;
    }
    else {
        activeItem++;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active');
});