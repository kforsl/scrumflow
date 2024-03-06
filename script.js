async function fetchPokemonDetails(url) {
    if (url=== '') {
      throw new Error("Ogiltig URL: " + url);
    }
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("Fel vid hämtning: " + response.statusText);
    }
    const data = await response.json();
    return data
  }
  