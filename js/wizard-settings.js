'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var avatarInput = setup.querySelector('[name="avatar"]');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireBall = setup.querySelector('.setup-fireball');

  avatarInput.style.cursor = 'move'; // а почему не работает, если повесить на обработчик? по идее свойство работает со всеми элементами

  var createInterfaceClickHandler = function (colorsArray, inputNameAttribute, elementToStyle, styleFeature) {
    return function () {
      var color = window.util.getRandomArrayElement(colorsArray);
      var input = setup.querySelector('[name="' + inputNameAttribute + '"]');
      input.value = color;
      elementToStyle.style[styleFeature] = color;

      if (elementToStyle === wizardCoat) {
        currentCoatColor = color;
      }
      if (elementToStyle === wizardEyes) {
        currentEyesColor = color;
      }

      updateWizards();
    };
  };

  var onCoatClick = createInterfaceClickHandler(window.window.consts.wizard.COAT_COLORS, 'coat-color', wizardCoat, 'fill');
  var onEyesClick = createInterfaceClickHandler(window.window.consts.wizard.EYES_COLORS, 'eyes-color', wizardEyes, 'fill');
  var onFireBallClick = createInterfaceClickHandler(window.consts.wizard.FIREBALL_COLORS, 'fireball-color', fireBall.parentElement, 'background-color');

  var currentCoatColor = 'rgb(101, 137, 164)';
  var currentEyesColor = 'black';

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === currentCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === currentEyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  // var updateWizards = function () {
  //   var sameCoatWizards = window.wizardsRender.loadedWizards.filter(function (it) {
  //     return it.colorCoat === currentCoatColor;
  //   });
  //   window.wizardsRender.clearWizards();
  //   window.wizardsRender.positionWizards(sameCoatWizards);
  // };

  var updateWizards = function () {
    window.wizardsRender.clearWizards();
    window.wizardsRender.positionWizards(window.wizardsRender.loadedWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizardSettings = {
    onCoatClick: onCoatClick,
    onEyesClick: onEyesClick,
    onFireBallClick: onFireBallClick
  };

})();
