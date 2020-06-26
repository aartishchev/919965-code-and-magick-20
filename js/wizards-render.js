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

  var onSuccessLoad = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.consts.WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onSuccessLoad, onError);

  // var renderWizardsFragment = function (wizards) {
  //   var fragment = document.createDocumentFragment();
  //   for (var i = 0; i < wizards.length; i++) {
  //     var currentDomWizard = renderWizard(wizards[i]);
  //     fragment.appendChild(currentDomWizard);
  //   }
  //   return fragment;
  // };

  var userDialog = document.querySelector('.setup');
  // userDialog.querySelector('.setup-similar').classList.remove('hidden');

  // var wizards = window.wizardsCreation.getWizards(window.consts.WIZARDS_QUANTITY);
  // var wizardsFragment = renderWizardsFragment(wizards);

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  // similarListElement.appendChild(wizardsFragment);

  var onSuccessSave = function () {
    userDialog.classList.add('hidden');
  };

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSuccessSave, onError);
    evt.preventDefault();
  });

})();
