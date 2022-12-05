
// qurey selectors
const search = document.querySelector('#search');
const number = document.querySelector('#poke-id');
const moveOne = document.querySelector('#move-one');
const moveTwo = document.querySelector('#move-two');
const moveThree = document.querySelector('#move-three');
const pokeImage = document.querySelector('#poke-img');
const hp = document.querySelector('#hp');


//      making fetch to pokeapi
const fetchPokeApi = async (pokeName) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);
    const pokeData = await response.json();
//      get that data back as json
    return pokeData;
}

//      event listener for search bar
search.addEventListener('change', async (event) => {
    const pokeData = await fetchPokeApi(event.target.value)
    console.log(pokeData)
    console.log(pokeData.stats[5].base_stat)

//    sets HP
    hp.innerHTML = pokeData.stats[5].base_stat + ' HP'


//    sets pokemon id
    number.innerHTML = '#'+ pokeData.id.toString().padStart(3, '0');

//      sets moves
    moveOne.innerHTML = pokeData.moves[0].move.name
    moveTwo.innerHTML = pokeData.moves[1].move.name
    moveThree.innerHTML = pokeData.moves[2].move.name

//      set image
    pokeImage.src = pokeData.sprites.other.dream_world.front_default;

});




