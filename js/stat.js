'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var HEROES_NAME = 'Вы';
var HEROES_BAR_FILL = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudHeader = function (ctx, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + FONT_GAP);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // тень облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // белое облако
  renderCloudHeader(ctx, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2); // заголовок с текстом в облаке, задан шрифт

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var barHeightDiff = MAX_BAR_HEIGHT - barHeight;
    var hystogramX = CLOUD_X + GAP * 5 + (BAR_WIDTH + BAR_GAP) * i;
    var hystogramMaxY = CLOUD_Y + GAP * 8;

    if (players[i] === HEROES_NAME) {
      ctx.fillStyle = HEROES_BAR_FILL; // индивидуальная заливка
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)'; // рандомная заливка, рандомайзер со stackoverflow
    }

    ctx.fillRect( // Гистрограмма
        hystogramX,
        hystogramMaxY + barHeightDiff,
        BAR_WIDTH,
        barHeight
    );
    ctx.fillStyle = '#000'; // Черная заливка
    ctx.fillText( // Текст с временем
        Math.round(times[i]),
        hystogramX,
        hystogramMaxY + barHeightDiff - GAP * 2
    );
    ctx.fillText( // Текст с именем
        players[i],
        hystogramX,
        hystogramMaxY + MAX_BAR_HEIGHT + GAP
    );
  }
};
