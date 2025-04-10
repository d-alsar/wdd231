import { places } from '../data/places.mjs';

const showHere = document.querySelector("#allplaces");

places.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("place-card");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <img src="${place.imageUrl}" alt="${place.name}">
    <p class="address"><strong>Address:</strong><br>${place.address}</p>
    <p class="summary"><strong>Summary:</strong><br>${place["short-description"]}</p>
    <button class="learn-more">Learn More</button>
    <p class="full-description hidden">${place.description}</p>
  `;

  showHere.appendChild(card);

  // Button functionality
  const learnMoreBtn = card.querySelector('.learn-more');
  const fullDesc = card.querySelector('.full-description');

  learnMoreBtn.addEventListener('click', () => {
    fullDesc.classList.toggle('hidden');
    learnMoreBtn.textContent = fullDesc.classList.contains('hidden') ? 'Learn More' : 'Show Less';
  });
});








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





// Get the element where the message will be shown
const visitMessage = document.querySelector('#visitMessage');

// Get current time
const now = Date.now();

// Get last visit timestamp from localStorage
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  // First time visitor
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate time difference in milliseconds
  const timeDiff = now - parseInt(lastVisit, 10);
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
  }
}

// Store current time as the latest visit
localStorage.setItem('lastVisit', now.toString());
