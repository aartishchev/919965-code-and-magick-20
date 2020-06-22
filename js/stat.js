'use strict';

(function () {
  var getRandomBlueSaturation = function () {
    var randomPercent = window.util.getRandomInteger(0, 100);
    return 'hsl(240, ' + randomPercent + '%, 50%)';
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.consts.CLOUD_WIDTH, window.consts.CLOUD_HEIGHT);
  };

  var renderCloudHeader = function (ctx, x, y) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура, вы победили!', x, y);
    ctx.fillText('Список результатов:', x, y + window.consts.FONT_GAP);
  };

  var renderHystogram = function (ctx, x, y, width, height) {
    ctx.fillRect(x, y, width, height);
  };

  var renderHystogramText = function (ctx, text, x, y, color) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, window.consts.CLOUD_X + window.consts.GAP, window.consts.CLOUD_Y + window.consts.GAP, 'rgba(0, 0, 0, 0.7)'); // тень облака
    renderCloud(ctx, window.consts.CLOUD_X, window.consts.CLOUD_Y, '#fff'); // белое облако
    renderCloudHeader(ctx, window.consts.CLOUD_X + window.consts.GAP * 2, window.consts.CLOUD_Y + window.consts.GAP * 2); // заголовок с текстом в облаке

    var maxTime = window.util.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var barHeight = (window.consts.MAX_BAR_HEIGHT * times[i]) / maxTime;
      var barHeightDiff = window.consts.MAX_BAR_HEIGHT - barHeight;
      var hystogramX = window.consts.CLOUD_X + window.consts.GAP * 5 + (window.consts.BAR_WIDTH + window.consts.BAR_GAP) * i;
      var hystogramMaxY = window.consts.CLOUD_Y + window.consts.GAP * 8;

      if (players[i] === window.consts.HEROES_NAME) { // определяем цвет для гистограммы
        ctx.fillStyle = window.consts.HEROES_BAR_FILL; // индивидуальная заливка
      } else {
        ctx.fillStyle = getRandomBlueSaturation(); // рандомная заливка
      }

      renderHystogram( // гистограмма с результатом
          ctx,
          hystogramX,
          hystogramMaxY + barHeightDiff,
          window.consts.BAR_WIDTH,
          barHeight
      );
      renderHystogramText( // текст с временем
          ctx,
          Math.round(times[i]),
          hystogramX,
          hystogramMaxY + barHeightDiff - window.consts.GAP * 2,
          '#000'
      );
      renderHystogramText( // текст с именем
          ctx,
          players[i],
          hystogramX,
          hystogramMaxY + window.consts.MAX_BAR_HEIGHT + window.consts.GAP,
          '#000'
      );
    }
  };
})();
