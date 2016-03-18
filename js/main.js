var $body = $('body');
var $html = $('html');

$html.on('keydown', function (e) {
  var randTop = Math.random() * 1920;
  var randLeft = Math.random() * 1920;
  var $div = $('<div>');

  $div.addClass('ball');
  $body.append($div);
  $div.css('top', randTop);
  $div.css('left', randLeft);
});
