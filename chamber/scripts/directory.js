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


async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Failed to fetch members data');
        }
        
        const members = await response.json();
        const membersContainer = document.getElementById('members-container');
        
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership_level)}</p>
                <p><strong>Industry:</strong> ${member.industry}</p>
            `;
            
            membersContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
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


