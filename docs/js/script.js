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

  $('#js-nav').on({
    'click': function() {
      $(this).removeClass('active');
      $('#js-nav-button').removeClass('active');
    }
  });

  $('#above-button').on({
    'click': function() {
      $('html,body').animate({scrollTop:0},"300");
    }
  });

  });
