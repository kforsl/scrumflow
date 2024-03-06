


























































function renderPokemonCard() {

    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const nameElement = document.createElement('h2');
    nameElement.textContent = 'Name: ${pokemon.name}';

    const urlElement = document.createElement('p');
    urlElement.textContent = 'URL: ${pkemon.url}';

    card.appendChild(nameElement);
    card.appendChild(urlElement);

    const contentContainer = document.querySelector('.content-container');
    contentContainer.appendChild(card);
    
};

renderPokemonCard();