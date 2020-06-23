'use strict';
(function () {
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
      window.window.consts.WIZARD_COAT_COLORS, 'coat-color', wizardCoat, 'fill'
  );
  var onEyesClick = createInterfaceClickHandler(
      window.window.consts.WIZARD_EYES_COLORS, 'eyes-color', wizardEyes, 'fill'
  );
  var onFireBallClick = createInterfaceClickHandler(
      window.consts.FIREBALL_COLORS, 'fireball-color', fireBall.parentElement, 'background-color'
  );

  window.wizardSettings = {
    onCoatClick: onCoatClick,
    onEyesClick: onEyesClick,
    onFireBallClick: onFireBallClick
  };

})();
