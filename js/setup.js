'use strict';

// константы и переменные
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;

var wizards = []; // пустой массив для магов
var userDialog = document.querySelector('.setup'); // основной блок
var similarListElement = userDialog.querySelector('.setup-similar-list'); // контейнер для магов
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item'); // шаблон

// функции
var getRandomArrElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomWizardName = function () {
  var randomName = '';
  var randomNumber = getRandomInt(0, 1);
  var firstSequence = getRandomArrElement(WIZARD_NAMES) + ' ' + getRandomArrElement(WIZARD_SECOND_NAMES);
  var secondSequence = getRandomArrElement(WIZARD_SECOND_NAMES) + ' ' + getRandomArrElement(WIZARD_NAMES);
  if (randomNumber) {
    randomName = firstSequence;
  } else {
    randomName = secondSequence;
  }
  return randomName;
};

var getWizards = function (array, quantity) {
  for (var i = 0; i < quantity; i++) {
    var currentWizard = {};
    currentWizard.name = getRandomWizardName();
    currentWizard.coatColor = getRandomArrElement(WIZARD_COAT_COLORS);
    currentWizard.eyesColor = getRandomArrElement(WIZARD_EYES_COLORS);
    array.push(currentWizard);
  }
  return array;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

// исполнение

getWizards(wizards, WIZARDS_QUANTITY);
userDialog.classList.remove('hidden');
renderFragment();
userDialog.querySelector('.setup-similar').classList.remove('hidden');
