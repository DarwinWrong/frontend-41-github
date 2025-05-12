$(function () {
  $('.has-tooltip')
    .on('mouseenter', function () {
      var $btn = $(this),
        txt = $btn.data('tooltip'),
        off = $btn.offset(),
        bw = $btn.outerWidth(),
        bh = $btn.outerHeight(),
        vpTop = $(window).scrollTop();

      var $tip = $('<div class="tooltip"></div>').text(txt).appendTo('body');

      var th = $tip.outerHeight(),
        tw = $tip.outerWidth();

      if (off.top - vpTop < th + 8) {
        $tip.addClass('bottom').css({
          top: off.top + bh + 8,
          left: off.left + bw / 2 - tw / 2,
        });
      } else {
        $tip.addClass('top').css({
          top: off.top - th - 8,
          left: off.left + bw / 2 - tw / 2,
        });
      }
    })
    .on('mouseleave', function () {
      $('.tooltip').remove();
    });
});
