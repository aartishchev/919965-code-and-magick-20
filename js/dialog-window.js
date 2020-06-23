'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var dialogHandle = setup.querySelector('.upload');

  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireBall = setup.querySelector('.setup-fireball');

  var onPopupEscPress = function (evt) {
    var userNameInput = document.querySelector('.setup-user-name');
    var currentElement = document.activeElement;
    if (evt.key === 'Escape' && currentElement !== userNameInput) {
      evt.preventDefault();
      closePopup();
    }
  };

  var setEmptyCoordinates = function (element) {
    element.style.left = '';
    element.style.top = '';
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', window.wizardSettings.onCoatClick);
    wizardEyes.addEventListener('click', window.wizardSettings.onEyesClick);
    fireBall.addEventListener('click', window.wizardSettings.onFireBallClick);
    dialogHandle.addEventListener('mousedown', window.windowMove.onMoveEvent);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', window.wizardSettings.onCoatClick);
    wizardEyes.removeEventListener('click', window.wizardSettings.onEyesClick);
    fireBall.removeEventListener('click', window.wizardSettings.onFireBallClick);
    dialogHandle.removeEventListener('mousedown', window.windowMove.onMoveEvent);
    setEmptyCoordinates(setup);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

})();
