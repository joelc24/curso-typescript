import { getPokemon } from "./generics/get-pokemons";


getPokemon(4)
    .then( pokemon => console.log(pokemon.sprites) )
    .catch( error => console.error(error) )
    .finally( ()=> console.log("Fin del pokemon") ) 