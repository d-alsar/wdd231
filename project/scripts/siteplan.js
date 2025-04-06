const yearElement = document.querySelector("#currentYear");
const currentYear = new Date().getFullYear();

// This creates a copyright symbol element
const copyrightSymbol = document.createTextNode("© ");

// This adds the copyright symbol and year to the span element
yearElement.appendChild(copyrightSymbol);
yearElement.appendChild(document.createTextNode(currentYear));


const today = new Date();
const dayElement = document.querySelector("#lastModified");

dayElement.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
}).format(today)}</span>`;