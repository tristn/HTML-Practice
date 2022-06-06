$(document).ready(function () {
  console.log('ready!');
  $('button').html('Click Me');
  $('button').on('click', function (event) {
    $('h1').toggleClass('cswitch');
  });
});
