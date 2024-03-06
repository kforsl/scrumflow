document.querySelector(`#generatePokemon`).addEventListener(`click`, () => {
    generate(pokemons);
});

function generate(pokemons) {
    const randomNumb = Math.floor(Math.random() * pokemons.length)
    const randomPokemon = pokemons[randomNumb];
    const pokemonInfo = fetchPokemonsDetails(randomPokemon.url);
    renderPokemonCard(pokemonInfo)
}