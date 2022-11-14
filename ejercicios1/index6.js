const pokemons = [
    {
        nombre: 'squirtle',
        tipoDePokemon: 'agua'
    },
    {
        nombre: 'pikachu',
        tipoDePokemon: 'eléctrico'
    },
    {
        nombre: 'charmander',
        tipoDePokemon: 'fuego'
    }
];

pokemons.forEach(pokemon => {
    if (pokemon.tipoDePokemon === 'fuego') {
        console.log(`${pokemon.nombre} es un pokemon de fuego!`);
    }
});