const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let image = document.createElement('img');

        // Set text content for elements
        name.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Born: ${prophet.birthdate}`;
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

        // Set attributes for the image
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '250');

        // Append elements to the card one at a time
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(birthdate);
        card.appendChild(birthplace);

        // Finally, append the card to the #cards div
        cards.appendChild(card);
    });
}

// Call the function to fetch and display data
getProphetData();
