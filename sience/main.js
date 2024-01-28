$(function(){
  $('.department2').on('click', function() {
    if ($(this).prop('checked')){
      $('.department1').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});
$(function(){
  $('.department1').on('click', function() {
    if ($(this).prop('checked')){
      $('.department2').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});
