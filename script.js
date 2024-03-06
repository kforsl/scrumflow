
let pokemonsArray = [];


async function fetchPokemons() {
    try {
        
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');

        console.log (response)

        
        if (!response.ok) {
            throw new Error('Kunde inte hämta pokemons');
        }

        const pokemonsData = await response.json();

        console.log (pokemonsData)

      
        pokemonsArray = pokemonsData.pokemons;

        console.log('Pokemons hittades', pokemonsArray);
    } catch (error) {
        console.error('Fel uppstod vid hämtning:', error.message);
    }
}

fetchPokemons();
