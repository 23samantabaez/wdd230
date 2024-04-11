
/*MENU*/
function toggleMenu() {
    var navLinks = document.getElementById("nav_links");
    navLinks.classList.toggle("active");
}


/*GET DATES*/
const currentYear = document.querySelector('#copyrightYear');
const copyrightYear = new Date();
currentYear.innerText = copyrightYear.getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);
