'use strict';

(function () {
  var TIMEOUT_IN_MS = 10000;
  var URL_LOAD = 'https://javascript.pages.academy/code-and-magick/data';
  var URL_SAVE = 'https://javascript.pages.academy/code-and-magick';

  var request = function (url, method, timeout, onLoad, onError, data) {
    var requestUrl = url;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open(method, requestUrl);
    xhr.send(data);
    xhr.timeout = timeout;

    var StatusCode = {
      OK: 200
    };
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  };

  var load = function (onLoad, onError) {
    request(URL_LOAD, 'GET', TIMEOUT_IN_MS, onLoad, onError);
  };

  var save = function (onLoad, onError, data) {
    request(URL_SAVE, 'POST', TIMEOUT_IN_MS, onLoad, onError, data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
