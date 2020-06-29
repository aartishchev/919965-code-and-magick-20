'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var renderWizardsFragment = function (wizards) {
    var shuffledWizards = window.util.shuffleArray(wizards);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.consts.WIZARDS_QUANTITY; i++) {
      var currentDomWizard = renderWizard(shuffledWizards[i]);
      fragment.appendChild(currentDomWizard);
    }
    return fragment;
  };

  var userDialog = document.querySelector('.setup');

  var onSuccessLoad = function (wizards) {
    var wizardsFragment = renderWizardsFragment(wizards);
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    similarListElement.appendChild(wizardsFragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onSuccessSave = function () {
    userDialog.classList.add('hidden');
  };

  var onError = function (errorMessage) {
    var errorBlock = document.createElement('div');
    errorBlock.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    errorBlock.style.position = 'absolute';
    errorBlock.style.left = 0;
    errorBlock.style.right = 0;
    errorBlock.style.fontSize = '30px';
    errorBlock.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', errorBlock);
  };

  var wizardsLoad = function () {
    window.backend.load(onSuccessLoad, onError);
  };

  var form = userDialog.querySelector('.setup-wizard-form');

  var submitEvent = function (evt) {
    window.backend.save(onSuccessSave, onError, new FormData(form));
    evt.preventDefault();
  };

  window.wizardsRender = {
    wizardsLoad: wizardsLoad,
    submitEvent: submitEvent
  };

})();
