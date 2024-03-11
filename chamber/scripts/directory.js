
fetch("data/members.json")
.then(function(response){
    return response.json();
})
.then(function(companies){
    let placeholder = document.querySelector("#companies-list");
    let out = "";
    for (let company of companies){
        out += `
        <div class="company-card">
                <h2>${company.name}</h2>
                <p><strong>Address:</strong> ${company.address}</p>
                <p><strong>Phone:</strong> ${company.phone}</p>
                <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                <img src="${company.logo}" alt="${company.name} Logo" width="100" height="100">
        </div>
        `;
    }
    placeholder.innerHTML = out;
})

//list or grid
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
    
