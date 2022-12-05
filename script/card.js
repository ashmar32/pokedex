
// qurey selector for the search bar and id
const search = document.querySelector('#search');
const number = document.querySelector('#poke-id');
const moveOne = document.querySelector('#move-one');


//making fetch to pokeapi
const fetchPokeApi = async (pokeName) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);
    const pokeData = await response.json();
// get that data back as json
    return pokeData;
}

//event listener for search bar
search.addEventListener('change', async (event) => {
    const pokeData = await fetchPokeApi(event.target.value)
    console.log(pokeData)
//    sets pokemon id
    number.innerHTML = '#'+ pokeData.id;
    moveOne.innerHTML = pokeData.moves[0].move.name

});




