
function displayCompanies(){
    fetch("data/members.json")
    .then(response => console.log(response))
    .then(data => {
        // Get the container where we'll display the company information
        const companiesList = document.getElementById('companies-list');

        // Iterate through each company in the JSON data
        data.forEach(company => {
            // Create a div element to hold the company information
            const companyDiv = document.createElement('div');

            // Populate the div with company details
            companyDiv.innerHTML = `
                <h2>${company.name}</h2>
                <p><strong>Address:</strong> ${company.address}</p>
                <p><strong>Phone:</strong> ${company.phone}</p>
                <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                <img src="${company.logo}" alt="${company.name} Logo" width="100" height="100">
            `;

            // Append the company div to the container
            companiesList.appendChild(companyDiv);
        });
    })
    
}
// Call the function to display companies when the page is loaded
window.addEventListener('load', displayCompanies);

