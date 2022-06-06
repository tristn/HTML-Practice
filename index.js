$(document).ready(function () {
  $('button').html('Click me to reveal hidden text!');
  $('button').on('Click', function (event) {
    $('hidden').toggleClass('surpriseColor');
  });
});
