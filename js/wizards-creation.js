'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECOND_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'];

  var getWizardName = function () {
    var firstName = window.util.getRandomArrayElement(WIZARD_NAMES);
    var secondName = window.util.getRandomArrayElement(WIZARD_SECOND_NAMES);
    var isNameFirst = window.util.getRandomInteger(0, 1);
    if (isNameFirst) {
      return firstName + ' ' + secondName;
    } else {
      return secondName + ' ' + firstName;
    }
  };

  var getWizardCoatColor = function () {
    return window.util.getRandomArrayElement(window.commonConstants.WIZARD_COAT_COLORS);
  };

  var getWizardEyesColor = function () {
    return window.util.getRandomArrayElement(window.commonConstants.WIZARD_EYES_COLORS);
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
