'use strict';

(function () {
  var load = function (onLoad, onError) {
    var urlToLoad = window.consts.URL_LOAD;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', urlToLoad);
    xhr.send();

    var timeOut = window.consts.TIMEOUT_IN_MS;
    xhr.timeout = timeOut;

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

  var save = function (data, onLoad, onError) {
    var urlToSave = window.consts.URL_SAVE;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', urlToSave);
    xhr.send(data);

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

  window.backend = {
    load: load,
    save: save
  };

})();
