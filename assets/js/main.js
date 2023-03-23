/* 
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container_main_img = document.querySelector('.row')
const container_thumbnail_img = document.querySelector('.row.g-2')
const btn_up_el = document.getElementById('up')
const btn_down_el = document.getElementById('down')


function print_img(array_img, where_to_put) {

    for(let i = 0; i < array_img.length; i++) {

        const markup_img = `
        <div class="col-12">
            <img class="img-fluid" src="${path_img()}0${i + 1}.webp" alt="">
        </div>`
    
        where_to_put.insertAdjacentHTML('beforeend', markup_img)
    }
}

function path_img() {
    return './assets/img/'
}

print_img(images, container_thumbnail_img)


let j = 0
btn_up_el.addEventListener('click', function() {

    j -= 1
    if(j <= 0) {
        j = images.length 
    }
    
    const active = document.querySelector('.col-10')
    active.classList.add('d-none')

    const markup_img = `
    <div class="col-10 d-flex justify-content-end">
        <img class="img-fluid" src="${path_img()}0${j}.webp" alt="">
    </div>`
    
    container_main_img.insertAdjacentHTML('afterbegin', markup_img)
})

btn_down_el.addEventListener('click', function() {

    j += 1
    if(j > images.length ) {
        j = 1
    }
    
    const active = document.querySelector('.col-10')
    active.classList.add('d-none')

    const markup_img = `
    <div class="col-10 d-flex justify-content-end">
        <img class="img-fluid" src="${path_img()}0${j}.webp" alt="">
    </div>`
    
    container_main_img.insertAdjacentHTML('afterbegin', markup_img)
})