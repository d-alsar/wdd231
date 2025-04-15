import places from '../data/places.mjs';

const container = document.getElementById('cards-container');
const buttons = document.querySelectorAll('#category-filters button');

// Clear cards before rendering
function clearCards() {
  container.innerHTML = '';
}

// Render filtered cards
function renderCards(filteredPlaces) {
  clearCards();
  filteredPlaces.forEach(place => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = place.image_url;
    img.alt = place.name;
    img.className = 'card-image';
    img.loading = 'lazy'; // <-- Lazy loading enabled
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = place.name;
    title.className = 'card-title';
    card.appendChild(title);

    const fee = document.createElement('p');
    fee.className = 'card-fee';
    if (place.entrance_fee) {
      fee.textContent = `Entrance Fee: ${place.entrance_fee}`;
    } else if (place.price_range) {
      fee.textContent = `Price Range: ${place.price_range}`;
    } else {
      fee.textContent = 'No fee info available';
    }
    card.appendChild(fee);

    const learnMoreBtn = document.createElement('button');
    learnMoreBtn.textContent = 'Learn More';
    learnMoreBtn.className = 'card-button';
    card.appendChild(learnMoreBtn);

    const details = document.createElement('div');
    details.className = 'card-details';
    details.style.display = 'none';
    details.innerHTML = `
      <p><strong>Address:</strong> ${place.address}</p>
      <p>${place.description}</p>
    `;
    card.appendChild(details);

    learnMoreBtn.addEventListener('click', () => {
      const visible = details.style.display === 'block';
      details.style.display = visible ? 'none' : 'block';
      learnMoreBtn.textContent = visible ? 'Learn More' : 'Hide';
    });

    container.appendChild(card);
  });
}


// Initial load
renderCards(places);

// Filter logic
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const category = btn.getAttribute('data-category');
    if (category === 'all') {
      renderCards(places);
    } else {
      const filtered = places.filter(p => p.category === category);
      renderCards(filtered);
    }
  });
});











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




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // Collapse content
      content.style.maxHeight = null;
      this.textContent = "Read More"; // Change button text to "Show More"
    } else {
      // Expand content
      content.style.maxHeight = content.scrollHeight + "px";
      this.textContent = "Show Less"; // Change button text to "Show Less"
    }
  });
}


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