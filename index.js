$(document).ready(function () {
  $('button').html('Click me to reveal hidden text!');
  $('button').on('click', function (event) {
    $('#hidden').toggleClass('surpriseColor');
  });
  // $('p').click(function () {
  //   $('p').hide();
  // });
  // $('h2').click(function () {
  //   $('h1').css('background-color', 'black');
  // });
});
