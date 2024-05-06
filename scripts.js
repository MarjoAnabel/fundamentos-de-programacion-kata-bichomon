console.log(document.title);
/*1*/
const Generation1Pokémon= document.querySelector('#gen-1');
Generation1Pokémon.textContent = 'Generasión 1 Pokimon';

/*2*/
const infocard = document.querySelector('.infocard-list')
infocard.style.background = 'yellow'

/*3*/
const urllocal = document.URL
console.log ( urllocal)

/*4*/
const urldominio = document.domain
console.log (urldominio)


/*5*/
const imagendonos = document.querySelectorAll('.img-fixed')
 console.log (imagendonos)


 /*6*/
 const camabiarimg = document.images;
 for (let i = 0; i < camabiarimg.length; i++) {
    camabiarimg[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
 };



