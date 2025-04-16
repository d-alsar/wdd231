import { gems } from '../data/gems.mjs'; // Fixed the path



const container = document.getElementById('cards2-container');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

const modalTitle = document.getElementById('modalTitle');
const modalAddress = document.getElementById('modalAddress');
const modalDescription = document.getElementById('modalDescription');
const modalPhone = document.getElementById('modalPhone');
const modalWebsite = document.getElementById('modalWebsite');

// Create cards for each place
gems.places.forEach((place, index) => {
  const card = document.createElement('div');
  card.className = 'gems-card';

  card.innerHTML = `
    <h2 class="gems-card-title">${place.name}</h2>
    <img src="${place.image_url}" alt="${place.name}" loading="lazy" />
    <div class="card-content">
      <p><strong>Entrance Fee:</strong> ${place.entrance_fee}</p>
      <button class="button" data-index="${index}"> I want to know more!</button>
    </div>
  `;

  container.appendChild(card);
});

// Modal logic
container.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('data-index');
    const place = gems.places[index];

    modalTitle.textContent = place.name;
    modalAddress.textContent = place.address;
    modalDescription.textContent = place.description;
    modalPhone.textContent = place.phone;
    modalWebsite.href = place.website;

    modal.style.display = 'flex';
  }
});

// Close modal when clicking the 'X'
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
