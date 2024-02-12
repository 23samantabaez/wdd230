
const currentYear = document.querySelector('#copyrightYear');
const copyrightYear = new Date();
currentYear.innerText = copyrightYear.getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});