import actionsCaller from '../model/actions/actions.js';
import constants from '../constants/index.js';
import tilesView from './tilesView.js';

const { actions } = constants;
const formElements = {};

const inputs = [...document.querySelectorAll('input')];

// validate all fields fullfill and type of event

// get elements and values from the form

function getFormElements() {
  formElements.btn = document.querySelector('#btn');
  formElements.feet = document.querySelector('#feet').value;
  formElements.inches = document.querySelector('#inches').value;
  formElements.name = document.querySelector('#name').value;
  formElements.selectDiet = document.querySelector('#diet').value;
  formElements.weight = document.querySelector('#weight').value;
  formElements.when = document.querySelector('#when').value;
  formElements.where = document.querySelector('#where').value;
  formElements.formContainer = document.querySelector('#dino-compare');
}

const validateForm = async (e) => {
  e.preventDefault();
  getFormElements();

  if (e.target.nodeName === 'INPUT') {
    e.target.classList.remove('my-class');
  }

  if (e.target.nodeName === 'BUTTON') {
    inputs.forEach((input) => {
      /*
      resources :
       - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
       - https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation
      */
      if (!input.checkValidity()) {
        input.classList.add('my-class');
      }
    });

    const validForm = (currentValue) => currentValue.checkValidity() === true;
    const {
      feet, inches, name, selectDiet, when, where, weight,
    } = formElements;

    if (inputs.every(validForm)) {
      await actionsCaller({
        actionType: actions.SET_HUMAN_DATA,
        payload: {
          hasName: true,
          diet: selectDiet,
          height: `${feet}'${inches}`,
          name,
          species: 'Human',
          weight,
          when,
          where,
        },
      });

      const modelData = await actionsCaller({
        actionType: actions.GET_MODEL_DATA,
      });

      formElements.formContainer.style.display = 'none';
      tilesView.renderTiles(modelData);
    }
  }
};

// form init

function initForm() {
  getFormElements();
  formElements.formContainer.addEventListener('click', validateForm);
}

export default {
  initForm,
  formElements,
};
