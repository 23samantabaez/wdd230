

fetch("data/members.json")
.then(function(response){
    return response.json();
})
.then(function(companies){
    let placeholder = document.querySelector("#companies-list");
    let out = "";
    for (let company of companies){
        out += `
        <h2>${company.name}</h2>
        <p><strong>Address:</strong> ${company.address}</p>
        <p><strong>Phone:</strong> ${company.phone}</p>
        <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
        <img src="${company.logo}" alt="${company.name} Logo" width="100" height="100">
        `;
    }
    placeholder.innerHTML = out;
})
    
