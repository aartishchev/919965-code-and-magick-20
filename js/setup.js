'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
};

var getWizardName = function () {
  var firstName = getRandomArrayElement(WIZARD_NAMES);
  var secondName = getRandomArrayElement(WIZARD_SECOND_NAMES);
  var isNameFirst = getRandomInteger(0, 1);
  if (isNameFirst) {
    return firstName + ' ' + secondName;
  } else {
    return secondName + ' ' + firstName;
  }
};

var getWizardCoatColor = function () {
  return getRandomArrayElement(WIZARD_COAT_COLORS);
};

var getWizardEyesColor = function () {
  return getRandomArrayElement(WIZARD_EYES_COLORS);
};

var getWizard = function () {
  var wizard = {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  };
  return wizard;
};

var getWizards = function (quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var currentWizard = getWizard();
    wizards.push(currentWizard);
  }
  return wizards;
};

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
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var wizards = getWizards(WIZARDS_QUANTITY);
var wizardsFragment = renderWizardsFragment(wizards);
similarListElement.appendChild(wizardsFragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
