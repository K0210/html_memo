$(function(){
  $('.department2').on('click', function() {
    if ($(this).prop('checked')){
      // 一旦全てをクリアして再チェックする
      $('.department1').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});
$(function(){
  $('.department1').on('click', function() {
    if ($(this).prop('checked')){
      // 一旦全てをクリアして再チェックする
      $('.department2').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});
