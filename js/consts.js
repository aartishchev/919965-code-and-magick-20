'use strict';

(function () {
  var cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10,
    GAP: 10,
    FONT_GAP: 15,
    BAR_GAP: 50,
    BAR_WIDTH: 40,
    MAX_BAR_HEIGHT: 150,
    HEROES_NAME: 'Вы',
    HEROES_BAR_FILL: 'rgba(255, 0, 0, 1)'
  };

  var wizard = {
    QUANTITY: 4,
    NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SECOND_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
  };

  window.consts = {
    wizard: wizard,
    cloud: cloud
  };

})();
