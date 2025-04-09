import { places } from '../data/places.mjs';

const showHere = document.querySelector("#allplaces");

places.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("place-card");

  // Structure matches CSS grid areas
  card.innerHTML = `
    <h2>${place.name}</h2>
    <img src="${place.imageUrl}" alt="${place.name}">
   
   
   



    <p>${place.description}</p>
  `;

  showHere.appendChild(card);
});

/* This code goes above, but needs to fix to display correctly in cards

 <p><strong>Address:</strong> ${place.address}</p>  
<p><strong>Summary:</strong> ${place["short-description"]}</p>    
*/





const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


// This code gets the current year and adds it to the span element with the id "currentYear"
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



