'use strict';

(function () {
  var getWizardName = function () {
    var firstName = window.util.getRandomArrayElement(window.consts.wizard.NAMES);
    var secondName = window.util.getRandomArrayElement(window.consts.wizard.SECOND_NAMES);
    var isNameFirst = window.util.getRandomInteger(0, 1);
    if (isNameFirst) {
      return firstName + ' ' + secondName;
    } else {
      return secondName + ' ' + firstName;
    }
  };

  var getWizardCoatColor = function () {
    return window.util.getRandomArrayElement(window.consts.wizard.COAT_COLORS);
  };

  var getWizardEyesColor = function () {
    return window.util.getRandomArrayElement(window.consts.wizard.EYES_COLORS);
  };

  var getWizard = function () {
    return {
      name: getWizardName(),
      coatColor: getWizardCoatColor(),
      eyesColor: getWizardEyesColor()
    };
  };

  var getWizards = function (quantity) {
    var wizards = [];
    for (var i = 0; i < quantity; i++) {
      var currentWizard = getWizard();
      wizards.push(currentWizard);
    }
    return wizards;
  };

  window.wizardsCreation = {
    getWizards: getWizards
  };

})();
