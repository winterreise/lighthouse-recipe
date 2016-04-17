$(document).ready(function() {
  console.log('Script included!');
  $('button').click(function() {
    $('img').toggle();
  });
  $('li').click(function() {
    $(this).toggleClass('done');
  });
});
