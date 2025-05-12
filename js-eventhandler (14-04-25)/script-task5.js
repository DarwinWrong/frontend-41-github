$(function () {
  var $items = $('#books li');
  $items.on('click', function () {
    $items.removeClass('active');
    $(this).addClass('active');
  });
});
