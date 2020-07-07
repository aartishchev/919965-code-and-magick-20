'use strict';
(function () {
  var getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomArrayElement = function (array) {
    return array[getRandomInteger(0, array.length - 1)];
  };

  var shuffleArray = function (array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    while (currentIndex !== 0) {
      randomIndex = getRandomInteger(0, array.length - 1);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  };

  var DEBOUNCE_INTERVAL = 500; // ms

  var debounce = function (cb) {
    var lastTimeout = null;
    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.util = {
    getRandomInteger: getRandomInteger,
    getRandomArrayElement: getRandomArrayElement,
    getMaxElement: getMaxElement,
    isEnterEvent: isEnterEvent,
    shuffleArray: shuffleArray,
    debounce: debounce
  };
})();
