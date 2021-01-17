import actionsCaller from './model/actions/actions.js';
import constants from './constants/index.js';
import formView from './view/formView.js';

const { actions } = constants;

// app initializator using IIFE

/*
  resources :
    - Use IIFE : https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
    - MVC Pattern : https://www.taniarascia.com/javascript-mvc-todo-app/
    - Revealed Module pattern : https://coryrylan.com/blog/javascript-module-pattern-basics
*/

const appController = (function appController() {
  return {
    async init() {
      await actionsCaller({
        actionType: actions.GET_DINO_DATA,
      });

      formView.initForm();
    },
  };
}());

appController.init();
