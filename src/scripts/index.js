import '../styles/index.scss';
import $ from "jquery";
import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

$(function() {
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.header__mobile-menu').toggleClass('open');
  });
  
  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });

  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animate__animated',     
    mobile:       true,       
    live:         true,       
    scrollContainer: null,    
    resetAnimation: true, 
  });

  wow.init();
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900, function() {
          var $target = $(target);
          $target.triggerHandler( "focus" );
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.triggerHandler( "focus" );
          };
        });
      }
    }
  });

$(window).on('scroll', function() {
  $('.header__mobile-menu').removeClass('open');
  $('#nav-icon').removeClass('open');
});

$(window).on('resize load', function() {
  $('.header__mobile-menu').removeClass('open');
  $('#nav-icon').removeClass('open');
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
