'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var renderWizardsFragment = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      var currentDomWizard = renderWizard(wizards[i]);
      fragment.appendChild(currentDomWizard);
    }
    return fragment;
  };

  var userDialog = document.querySelector('.setup');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var wizards = window.wizardsCreation.getWizards(window.consts.WIZARDS_QUANTITY);
  var wizardsFragment = renderWizardsFragment(wizards);

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  similarListElement.appendChild(wizardsFragment);
})();
