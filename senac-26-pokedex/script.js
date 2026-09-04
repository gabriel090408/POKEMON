async function iniciar() {
  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await resposta.json();
  return data;
}

async function criarCard() {
   const body = document.querySelector('body');
   body.insertAdjacentHTML('beforeend', `
     <div class="container">
        <h1>Pokedex</h1>
        <div class="pokemon-card" id="pokemon-card">
        
        </div>
    </div>


        <ul class="pagina" id="pagina">   

        <li class="pagina-item" id="pagina-anterior"><a href="">Anterior</a></li>
        <li class="pagina-item" id="pagina-proximo"><a href="">Próximo</a></li>

       </ul>
    `
)
     const pokemonData = await iniciar();
     console.log(pokemonData);
     pokemonData.results.forEach(async (pokemon) => {
         
        const res = await fetch(pokemon.url)
         
         const pokemonInfo = await res.json();
         
         console.log(pokemonInfo);


         const div = document.getElementById('pokemon-card');
         div.insertAdjacentHTML('beforeend', `
             <h2>${pokemonInfo.name}</h2>
             <img src="${pokemonInfo.sprites.front_default}" alt="${pokemonInfo.name}">
             <p>Altura: ${pokemonInfo.height}</p>
             <p>Peso: ${pokemonInfo.weight}</p>
         `)
 })
 
}
criarCard()
