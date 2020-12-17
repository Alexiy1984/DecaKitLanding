import '../styles/index.scss';
import $ from "jquery";

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

$(window).on('resize load', function() {
  if ($(window).outerWidth() < 480) {
    $('.popups-block .flex-inner').height('auto');
    $('.vertical-cards-block .flex-inner').height('auto');
  } else {
    if ($(window).outerWidth() < 768) {
      var popupsblock_height = $('.popups-block .flex-inner__item').eq(0).outerHeight() 
      + $('.popups-block .flex-inner__item').eq(2).outerHeight()
      + $('.popups-block .flex-inner__item').eq(4).outerHeight();
      $('.popups-block .flex-inner').height(popupsblock_height + 70);
      var verticalblock_height = $('.vertical-cards-block .flex-inner__item').eq(0).outerHeight() 
      + $('.vertical-cards-block .flex-inner__item').eq(2).outerHeight()
      + $('.vertical-cards-block .flex-inner__item').eq(4).outerHeight()
      + $('.vertical-cards-block .flex-inner__item').eq(6).outerHeight()
      + $('.vertical-cards-block .flex-inner__item').eq(8).outerHeight();
      $('.vertical-cards-block .flex-inner').height(verticalblock_height + 150);
    } else {
      var popupsblock_height = $('.popups-block .flex-inner__item').eq(1).outerHeight() 
      + $('.popups-block .flex-inner__item').eq(4).outerHeight();
      $('.popups-block .flex-inner').height(popupsblock_height + 50);
      var verticalblock_height = $('.vertical-cards-block .flex-inner__item').eq(1).outerHeight() 
      + $('.vertical-cards-block .flex-inner__item').eq(4).outerHeight()
      + $('.vertical-cards-block .flex-inner__item').eq(7).outerHeight();
      $('.vertical-cards-block .flex-inner').height(verticalblock_height + 70);
    }
  }
});

// console.log($('.popups-block .flex-inner__item').eq(2).html());
