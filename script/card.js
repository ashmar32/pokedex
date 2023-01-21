
// qurey selectors
const search = document.querySelector('#search');
const number = document.querySelector('#poke-id');
const moveOne = document.querySelector('#move-one');
const moveTwo = document.querySelector('#move-two');
const moveThree = document.querySelector('#move-three');
const pokeImage = document.querySelector('#poke-img');
const hp = document.querySelector('#hp');
const type = document.querySelector('#type');


//      making fetch to pokeapi
async function fetchPokeApi(pokeName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);
    const pokeData = await response.json();
//      get that data back as json
    return pokeData;
}

//      event listener for search bar
search.addEventListener('change', async function (event) {
    const pokeData = await fetchPokeApi(event.target.value)
    console.log(pokeData)

//    sets HP
    hp.innerHTML = pokeData.stats[5].base_stat + ' HP'

//    sets pokemon type
    type.innerHTML = pokeData.types[0].type.name


//    sets pokemon id
    number.innerHTML = '#' + pokeData.id.toString().padStart(3, '0');

//    sets moves
    moveOne.innerHTML = pokeData.moves[0].move.name
    moveTwo.innerHTML = pokeData.moves[1].move.name
    moveThree.innerHTML = pokeData.moves[2].move.name

//    set image
    pokeImage.src = pokeData.sprites.other.dream_world.front_default;

});




