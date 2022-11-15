const pokemons = [
    {
        nombre: 'squirtle',
        tipo: 'agua'
    },
    {
        nombre: 'pikachu',
        tipo: 'eléctrico'
    },
    {
        nombre: 'charmander',
        tipo: 'fuego'
    }
];

function mostrarNombre(pokemons) {
    pokemons.forEach(pokemon => console.log(pokemon.nombre));
}

mostrarNombre(pokemons);

function mostrarSiFuego(pokemons) {
    pokemons.forEach(pokemon => {if(pokemon.tipo === 'fuego') console.log(pokemon.nombre,"es de tipo fuego")});
}

mostrarSiFuego(pokemons);

console.warn("ahora con flecha 🏹");
const mostrarNombreArrow = pokemons => {
    pokemons.forEach(pokemon => console.log(pokemon.nombre));
};

mostrarNombreArrow(pokemons);

const mostrarSiFuegoArrow = pokemons => {
    pokemons.forEach(pokemon => {if(pokemon.tipo === 'fuego') console.log(pokemon.nombre,"es de tipo fuego") });
};

mostrarSiFuegoArrow(pokemons);