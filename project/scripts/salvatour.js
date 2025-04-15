console.log("salvatour.js loaded as a module!");
import places from '../data/places.mjs';

const container = document.getElementById('cards-container');
const buttons = document.querySelectorAll('#category-filters button');

if (container && buttons.length > 0) {
  function clearCards() {
    container.innerHTML = '';
  }

  function renderCards(filteredPlaces) {
    clearCards();
    filteredPlaces.forEach(place => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = place.image_url;
      img.alt = place.name;
      img.className = 'card-image';
      img.loading = 'lazy';
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

  renderCards(places);

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
}


// Footer logic
const yearElement = document.querySelector("#currentYear");
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.appendChild(document.createTextNode("© "));
  yearElement.appendChild(document.createTextNode(currentYear));
}

const dayElement = document.querySelector("#lastModified");
if (dayElement) {
  const today = new Date();
  dayElement.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
  }).format(today)}</span>`;
}

const coll = document.getElementsByClassName("collapsible");
if (coll.length > 0) {
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.textContent = "Read More";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.textContent = "Show Less";
      }
    });
  }
}


//localStorage logic
console.log("salvatour.js loaded as a module!");

document.addEventListener('DOMContentLoaded', () => {
  const visitMessage = document.querySelector('#visitMessage');

  if (!visitMessage) {
    console.warn("visitMessage element not found.");
    return;
  }

  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
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

  localStorage.setItem('lastVisit', now.toString());
});




// Card logic — only run if the element exists
const cardsContainer = document.getElementById('cards-container');
if (cardsContainer) {
  // Your card generation or logic here
}





// Hamburger menu functionality
// Hamburger menu functionality
const menuBtn = document.getElementById("menu");
const nav = document.querySelector(".header-right");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuBtn.classList.toggle("show");
});


    // Retrieve the data from localStorage

document.getElementById('firstName').textContent = localStorage.getItem('firstName');
document.getElementById('lastName').textContent = localStorage.getItem('lastName');
document.getElementById('department').textContent = localStorage.getItem('department');
document.getElementById('subject').textContent = localStorage.getItem('subject');
document.getElementById('timestamp').textContent = localStorage.getItem('timestamp');