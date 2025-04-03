document.addEventListener("DOMContentLoaded", () => {
    loadMemberships();
});

async function loadMemberships() {
    try {
        const response = await fetch('data/membership.json'); // Adjust if needed ('./memberships.json')
        if (!response.ok) throw new Error("Failed to load JSON");
        const memberships = await response.json();
        generateMembershipCards(memberships);
    } catch (error) {
        console.error("Error loading memberships:", error);
    }
}

function generateMembershipCards(memberships) {
    const container = document.getElementById("membershipCards");
    const modalsContainer = document.getElementById("modalsContainer");

    if (!container || !modalsContainer) {
        console.error("Containers not found in HTML");
        return;
    }

    memberships.forEach((membership, index) => {
        // Create card
        const card = document.createElement("div");
        card.classList.add("card", "fade-in");
        card.style.animationDelay = `${index * 0.3}s`; // Staggered animation
        card.innerHTML = `
            <h3>${membership.title}</h3>
            <p>${membership.description}</p>
            <button onclick="openModal('${membership.id}')">Learn More</button>
        `;
        container.appendChild(card);

        // Create modal
        const modal = document.createElement("div");
        modal.id = `modal-${membership.id}`;
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('${membership.id}')">&times;</span>
                <h3>${membership.title} Benefits</h3>
                <ul>
                    ${membership.benefits.map(benefit => `<li>${benefit}</li>`).join("")}
                </ul>
            </div>
        `;
        modalsContainer.appendChild(modal);
    });
}


function openModal(id) {
    // Close any open modals first
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
    });

    // Open the selected modal
    const modal = document.getElementById(`modal-${id}`);
    if (modal) {
        modal.style.display = "flex";
        
        // Disable all "Learn More" buttons while the modal is open
        toggleLearnMoreButtons(true);
    }
}

function closeModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    if (modal) {
        modal.style.display = "none";

        // Re-enable "Learn More" buttons once the modal is closed
        toggleLearnMoreButtons(false);
    }
}

// Function to enable/disable "Learn More" buttons
function toggleLearnMoreButtons(disable) {
    document.querySelectorAll(".card button").forEach(button => {
        button.disabled = disable;
        button.style.opacity = disable ? "0.5" : "1";  // Dim buttons when disabled
        button.style.pointerEvents = disable ? "none" : "auto";  // Prevent clicking
    });
}


function toggleView() {
    const membersContainer = document.getElementById('members-container');
    membersContainer.classList.toggle('grid-view');
}

// Load members when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadMembers();
    document.getElementById('toggle-view-btn').addEventListener('click', toggleView);
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






 // Extract URL parameters
 const params = new URLSearchParams(window.location.search);
 document.getElementById("firstName").textContent = params.get("first") || "N/A";
 document.getElementById("lastName").textContent = params.get("last") || "N/A";
 document.getElementById("email").textContent = params.get("email") || "N/A";
 document.getElementById("phone").textContent = params.get("phone") || "N/A";
 document.getElementById("organization").textContent = params.get("organization") || "N/A";
 document.getElementById("timestamp").textContent = new Date().toLocaleString();