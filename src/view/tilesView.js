const grid = document.querySelector('#grid');
let tilesData;
let currentHuman;

// generate tiles

function tilesFactory(tiles) {
  let content = '';
  // get fact method names
  const tilesPrototypeNames = Object.keys(Object.getPrototypeOf(tiles[0]));

  tiles.forEach((tile) => {
    let randomCompareTileFunction;
    let currentFact = '';

    // randomize tiles and methods
    if (tile.species !== 'Human') {
      randomCompareTileFunction = tilesPrototypeNames[
        Math.floor(Math.random() * tilesPrototypeNames.length)
      ];
      currentFact = tile[randomCompareTileFunction](currentHuman);
    }

    content += `
      <div class="grid-item">
        <h2>${tile.hasName ? tile.name : tile.species}</h2>
        <img src="./images/${tile.species}.png" alt="${tile.species}">
        <p>${tile.species === 'Pigeon' ? tile.fact : currentFact}</p>
      </div>
    `;
  });

  return content;
}

// append tiles to the DOM

async function renderTiles(data) {
  tilesData = { ...data };
  currentHuman = { ...tilesData.species[4] };

  grid.innerHTML = tilesFactory(tilesData.species);
}

export default {
  renderTiles,
};
