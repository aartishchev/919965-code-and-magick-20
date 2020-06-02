'use strict';

// Константы, переменные
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

// Функции
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomBlueSaturation = function () {
  var randomPercent = getRandomInt(0, 100);
  return 'hsl(240, ' + randomPercent + '%, 50%)';
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

var renderCloud = function (ctx, x, y, color) {
  ctx.font = '16px PT Mono';
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

var renderHystogram = function (ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
};

var renderHystogramText = function (ctx, text, x, y, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

// Основная функция
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // тень облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // белое облако
  renderCloudHeader(ctx, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2); // заголовок с текстом в облаке

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var barHeightDiff = MAX_BAR_HEIGHT - barHeight;
    var hystogramX = CLOUD_X + GAP * 5 + (BAR_WIDTH + BAR_GAP) * i;
    var hystogramMaxY = CLOUD_Y + GAP * 8;

    if (players[i] === HEROES_NAME) { // определяем цвет для гистограммы
      ctx.fillStyle = HEROES_BAR_FILL; // индивидуальная заливка
    } else {
      ctx.fillStyle = getRandomBlueSaturation(); // рандомная заливка
    }

    renderHystogram( // гистограмма с результатом
        ctx,
        hystogramX,
        hystogramMaxY + barHeightDiff,
        BAR_WIDTH,
        barHeight
    );
    renderHystogramText( // текст с временем
        ctx,
        Math.round(times[i]),
        hystogramX,
        hystogramMaxY + barHeightDiff - GAP * 2,
        '#000'
    );
    renderHystogramText( // текст с именем
        ctx,
        players[i],
        hystogramX,
        hystogramMaxY + MAX_BAR_HEIGHT + GAP,
        '#000'
    );
  }
};
