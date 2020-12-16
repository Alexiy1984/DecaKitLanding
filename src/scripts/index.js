import '../styles/index.scss';
import $ from "jquery";

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

$(window).on('resize load', function() {
  if ($(window).outerWidth() < 480) {
    $('.popups-block .flex-inner').height('auto');
  } else {
    if ($(window).outerWidth() < 768) {
      var masonry_height = $('.popups-block .flex-inner__item').eq(0).outerHeight() 
      + $('.popups-block .flex-inner__item').eq(2).outerHeight()
      + $('.popups-block .flex-inner__item').eq(4).outerHeight();
      $('.popups-block .flex-inner').height(masonry_height + 70);
    } else {
      var masonry_height = $('.popups-block .flex-inner__item').eq(1).outerHeight() + $('.popups-block .flex-inner__item').eq(4).outerHeight();
      $('.popups-block .flex-inner').height(masonry_height + 50);
    }
  }
});

// console.log($('.popups-block .flex-inner__item').eq(2).html());
