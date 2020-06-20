'use strict';
(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireBall = setup.querySelector('.setup-fireball');

  var createInterfaceClickHandler = function (colorsArray, inputNameAttribute, elementToStyle, styleFeature) {
    return function () {
      var color = window.util.getRandomArrayElement(colorsArray);
      var input = setup.querySelector('[name="' + inputNameAttribute + '"]');
      input.value = color;
      elementToStyle.style[styleFeature] = color;
    };
  };

  var onCoatClick = createInterfaceClickHandler(
      window.commonConstants.WIZARD_COAT_COLORS, 'coat-color', wizardCoat, 'fill'
  );
  var onEyesClick = createInterfaceClickHandler(
      window.commonConstants.WIZARD_EYES_COLORS, 'eyes-color', wizardEyes, 'fill'
  );
  var onFireBallClick = createInterfaceClickHandler(
      FIREBALL_COLORS, 'fireball-color', fireBall.parentElement, 'background-color'
  );

  window.wizardSettings = {
    onCoatClick: onCoatClick,
    onEyesClick: onEyesClick,
    onFireBallClick: onFireBallClick
  };
})();
