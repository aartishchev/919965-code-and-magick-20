'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 15;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var MAX_BAR_HEIGHT = 150;
  var HEROES_NAME = 'Вы';
  var HEROES_BAR_FILL = 'rgba(255, 0, 0, 1)';

  var WIZARDS_QUANTITY = 4;
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
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  window.consts = {
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    GAP: GAP,
    FONT_GAP: FONT_GAP,
    BAR_GAP: BAR_GAP,
    BAR_WIDTH: BAR_WIDTH,
    MAX_BAR_HEIGHT: MAX_BAR_HEIGHT,
    HEROES_NAME: HEROES_NAME,
    HEROES_BAR_FILL: HEROES_BAR_FILL,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    WIZARDS_QUANTITY: WIZARDS_QUANTITY,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SECOND_NAMES: WIZARD_SECOND_NAMES,
    FIREBALL_COLORS: FIREBALL_COLORS,
  };

})();
