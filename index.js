$(document).ready(function () {
  $('button').html('Click me to reveal hidden text!');
  $('button').on('click', function (event) {
    $('#hidden').toggleClass('surpriseColor');
  });
});
