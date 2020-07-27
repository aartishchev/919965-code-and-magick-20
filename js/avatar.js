'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');
  var setupAvatar = document.querySelector('.setup-open img');

  var avatarHanlder = function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
        setupAvatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  var addAvatarHandler = function () {
    fileChooser.addEventListener('change', avatarHanlder);
  };

  var removeAvatarHandler = function () {
    fileChooser.removeEventListener('change', avatarHanlder);
  };

  window.avatar = {
    addAvatarHandler: addAvatarHandler,
    removeAvatarHandler: removeAvatarHandler
  };

})();
