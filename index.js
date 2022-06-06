$(document).ready(function () {
  $('button').html('Click Me');
  $('button').on('click', function (event) {
    $('#hidden').css('color', 'black');
  });
});
