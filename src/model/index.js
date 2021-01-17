let model = {
  species: [],
};

// set new specie

function setSpecies(species = []) {
  model = {
    species: [...species],
  };
}

// get model data

function getModel() {
  const modelCopy = {};

  Object.keys(model).forEach((key) => {
    modelCopy[key] = model[key];
  });

  return model;
}

export {
  getModel,
  setSpecies,
};
