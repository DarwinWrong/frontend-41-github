$(function () {
  var $overlay = $('#modal-overlay');

  $('#open-btn').on('click', function () {
    $overlay.fadeIn(200);
  });

  $('#close-btn').on('click', function () {
    $overlay.fadeOut(200);
  });

  $overlay.on('click', function (e) {
    if (e.target === this) {
      $overlay.fadeOut(200);
    }
  });
});
