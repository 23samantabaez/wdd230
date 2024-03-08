const baseURL = "https://23samantabaez.github.io/wdd230/";
const linksURL = "https://23samantabaez.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
  
getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((week) => {

        let lesson = document.createElement('act');
        let links = document.createElement('a'); 

        week.textContent = `${week.lesson} ${week.links}`
    }
}