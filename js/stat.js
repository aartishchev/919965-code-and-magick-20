'use strict';

(function () {
  var getRandomBlueSaturation = function () {
    var randomPercent = window.util.getRandomInteger(0, 100);
    return 'hsl(240, ' + randomPercent + '%, 50%)';
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.consts.cloud.WIDTH, window.consts.cloud.HEIGHT);
  };

  var renderCloudHeader = function (ctx, x, y) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура, вы победили!', x, y);
    ctx.fillText('Список результатов:', x, y + window.consts.cloud.FONT_GAP);
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
    renderCloud(ctx, window.consts.cloud.X + window.consts.cloud.GAP, window.consts.cloud.Y + window.consts.cloud.GAP, 'rgba(0, 0, 0, 0.7)'); // тень облака
    renderCloud(ctx, window.consts.cloud.X, window.consts.cloud.Y, '#fff'); // белое облако
    renderCloudHeader(ctx, window.consts.cloud.X + window.consts.cloud.GAP * 2, window.consts.cloud.Y + window.consts.cloud.GAP * 2); // заголовок с текстом в облаке

    var maxTime = window.util.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var barHeight = (window.consts.cloud.MAX_BAR_HEIGHT * times[i]) / maxTime;
      var barHeightDiff = window.consts.cloud.MAX_BAR_HEIGHT - barHeight;
      var hystogramX = window.consts.cloud.X + window.consts.cloud.GAP * 5 + (window.consts.cloud.BAR_WIDTH + window.consts.cloud.BAR_GAP) * i;
      var hystogramMaxY = window.consts.cloud.Y + window.consts.cloud.GAP * 8;

      if (players[i] === window.consts.cloud.HEROES_NAME) { // определяем цвет для гистограммы
        ctx.fillStyle = window.consts.cloud.HEROES_BAR_FILL; // индивидуальная заливка
      } else {
        ctx.fillStyle = getRandomBlueSaturation(); // рандомная заливка
      }

      renderHystogram( // гистограмма с результатом
          ctx,
          hystogramX,
          hystogramMaxY + barHeightDiff,
          window.consts.cloud.BAR_WIDTH,
          barHeight
      );
      renderHystogramText( // текст с временем
          ctx,
          Math.round(times[i]),
          hystogramX,
          hystogramMaxY + barHeightDiff - window.consts.cloud.GAP * 2,
          '#000'
      );
      renderHystogramText( // текст с именем
          ctx,
          players[i],
          hystogramX,
          hystogramMaxY + window.consts.cloud.MAX_BAR_HEIGHT + window.consts.cloud.GAP,
          '#000'
      );
    }
  };
})();
