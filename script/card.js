
// qurey selectors
const search = document.querySelector('#search');
const number = document.querySelector('#poke-id');
const moveOne = document.querySelector('#move-one');
const moveTwo = document.querySelector('#move-two');
// const moveThree = document.querySelector('#move-three');
const pokeImage = document.querySelector('#poke-img');
const hp = document.querySelector('#hp');
const type = document.querySelector('#type');
const about = document.querySelector('#about');
const card = document.querySelector('#card')

const typeColors = {
    "rock":     [182, 158,  49],
    "ghost":    [112,  85, 155],
    "steel":    [183, 185, 208],
    "water":    [100, 147, 235],
    "grass":    [116, 203,  72],
    "psychic":  [251,  85, 132],
    "ice":      [154, 214, 223],
    "dark":     [117,  87,  76],
    "fairy":    [230, 158, 172],
    "normal":   [170, 166, 127],
    "fighting": [193,  34,  57],
    "flying":   [168, 145, 236],
    "poison":   [164,  62, 158],
    "ground":   [222, 193, 107],
    "bug":      [167, 183,  35],
    "fire":     [245, 125,  49],
    "electric": [249, 207,  48],
    "dragon":   [112,  55, 255]
}

//      making fetch to pokeapi
async function fetchPokeApi(pokeName) {
    let pokemonNameApi = pokeName.split(' ').join('-')

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonNameApi);

    if (response.status === 200) {
        const pokeData = await response.json();
//      get that data back as json
        return pokeData;
    }
    return false;
}

//      event listener for search bar
search.addEventListener('change', async function (event) {
    const pokeData = await fetchPokeApi(event.target.value)

//pokemon doesn't exist give message
    if (!pokeData) {
        alert('Pokemon not found!');
        return;
    }

//  Change main color based on type
    const mainColor = typeColors[pokeData.types[0].type.name]
    card.style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
    console.log(pokeData)

//    sets HP
    hp.innerHTML = pokeData.stats[5].base_stat + ' HP'

//    sets pokemon id
    number.innerHTML = '#' + pokeData.id.toString().padStart(3, '0');

//    sets moves
    moveOne.innerHTML = pokeData.moves[0].move.name
    moveTwo.innerHTML = pokeData.moves[1].move.name

//    set image
    pokeImage.src = pokeData.sprites.other.dream_world.front_default;

//    set type bubble
    type.innerHTML = pokeData.types[0].type.name


//      Set about info
    about.innerHTML ="Height: " + pokeData.height + "," +  " Weight: " + pokeData.weight + " lbs."
});




