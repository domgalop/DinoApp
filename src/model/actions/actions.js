import { setSpecies, getModel } from '../index.js';
import CreatureFactory from '../../factories/creatureFactory.js';
import fetchData from '../../api/api.js';
import constants from '../../constants/index.js';

const { actions, endPoints } = constants;

// set new human to the model

function setHumanData(newHuman = {}) {
  const human = new CreatureFactory(newHuman);
  const model = [...getModel().species];

  model.splice(4, 0, human);

  setSpecies(model);
}

// set new dino to the model

function setDinoData(dinoData) {
  setSpecies(dinoData);
}

// get dino data from the api

async function getDinoData() {
  const dinoData = await fetchData(endPoints.GET_DINOS);

  setDinoData(dinoData.Dinos.map((dino) => new CreatureFactory(dino)));
}

// call action base on type

export default function actionTypes({ actionType = '', payload = {} } = {}) {
  switch (actionType) {
    case actions.GET_MODEL_DATA:
      return getModel();
    case actions.GET_DINO_DATA:
      return getDinoData();
    case actions.SET_DINO_DATA:
      return setDinoData(payload);
    case actions.SET_HUMAN_DATA:
      return setHumanData(payload);
    default:
      throw new Error('Sorry, this is not a valid action');
  }
}
