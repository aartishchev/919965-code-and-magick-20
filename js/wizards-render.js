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
    // var shuffledWizards = window.util.shuffleArray(wizards);
    var fragment = document.createDocumentFragment();
    var currentArrayLength = window.consts.wizard.QUANTITY;
    if (window.consts.wizard.QUANTITY > wizards.length) {
      currentArrayLength = wizards.length;
    }
    for (var i = 0; i < currentArrayLength; i++) {
      var currentDomWizard = renderWizard(wizards[i]);
      fragment.appendChild(currentDomWizard);
    }
    return fragment;
  };

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var positionWizards = function (wizards) {
    var wizardsFragment = renderWizardsFragment(wizards);
    similarListElement.appendChild(wizardsFragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var clearWizards = function () {
    while (similarListElement.firstChild) {
      similarListElement.removeChild(similarListElement.firstChild);
    }
  };

  var loadedWizards = null;

  var renderWizards = function () {
    if (similarListElement.hasChildNodes()) {
      return;
    }
    if (loadedWizards) {
      positionWizards(loadedWizards);
    } else {
      wizardsLoad();
    }
  };

  var onSuccessLoad = function (wizards) {
    positionWizards(wizards);
    loadedWizards = wizards;
    window.wizardsRender.loadedWizards = loadedWizards; // если так не перезаписать, почему-то при загрузке все равно останется null
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

  var onSuccessSave = function () {
    userDialog.classList.add('hidden');
    clearWizards();
  };

  var submitEvent = function (evt) {
    window.backend.save(onSuccessSave, onError, new FormData(form));
    evt.preventDefault();
  };

  window.wizardsRender = {
    renderWizards: renderWizards,
    submitEvent: submitEvent,
    clearWizards: clearWizards,
    positionWizards: positionWizards,
    loadedWizards: loadedWizards
  };

})();
