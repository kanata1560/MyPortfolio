$(function(){

  $('#js-nav-button').on({
    'click': function() {
      $(this).toggleClass('active');

      if($(this).hasClass('active')){
        $('#js-nav').addClass('active');
      }else{
        $('#js-nav').removeClass('active');
      };

    }
  });

  });
