$(function () {
  var $ball = $('#ball'),
    bw = $ball.width(),
    bh = $ball.height(),
    fieldW = $(window).width(),
    fieldH = $(window).height();

  $(window).on('resize', function () {
    fieldW = $(window).width();
    fieldH = $(window).height();
  });

  $('body').on('click', function (e) {
    var x = e.pageX - bw / 2,
      y = e.pageY - bh / 2;
    x = Math.max(0, Math.min(x, fieldW - bw));
    y = Math.max(0, Math.min(y, fieldH - bh));
    $ball.stop().animate({ left: x + 'px', top: y + 'px' }, 600);
  });
});
