$(document).ready(function () {
  var $input = $('#username');

  $input.on('keypress', function (e) {
    var charCode = e.which;
    if (
      charCode === 8 ||
      charCode === 9 ||
      charCode === 13 ||
      charCode === 46 ||
      (charCode >= 37 && charCode <= 40)
    ) {
      return;
    }
    if (charCode >= 48 && charCode <= 57) {
      e.preventDefault();
    }
  });

  $input.on('input', function () {
    var clean = $(this).val().replace(/\d+/g, '');
    if (clean !== $(this).val()) {
      $(this).val(clean);
    }
  });
});
