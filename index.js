$(document).ready(function () {
  $('button').html('Click Me');
  $('button').on('click', function (event) {
    $('h1').css('color', 'black');
  });
});
