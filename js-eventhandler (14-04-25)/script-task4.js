$(function () {
  var lights = [$('.light.red'), $('.light.yellow'), $('.light.green')];
  var current = 0;
  lights[current].addClass('active');

  $('#next-btn').on('click', function () {
    lights[current].removeClass('active');
    current = (current + 1) % lights.length;
    lights[current].addClass('active');
  });
});
