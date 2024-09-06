"use strict";

/*
 *  global.js is setting up common rule.
 */
$(document).ready(function () {
  var btn = $('.js-btn-01');
  var btn_02 = $('.js-btn-02');
  var btn_03 = $('.js-btn-03');
  var smoothing = 'smoothing';
  var init = 'init';
  var leftRight = 'left-right';
  var rightLeft = 'right-left';
  var lr03 = 'left-right03';
  var rl03 = 'right-left03';
  var change__color = 'change__color';
  var change__color02 = 'change__color02';
  var change__color03 = 'change__color03';
  var header__btnTxt = $('.l-header__btn-txt');
  var header__btnIcon = $('.l-header__btn-icon');
  var mUnder__txt02 = $('.m-foot__btn-txt');
  var footBtn_icon = $('.m-foot__btn-icon');
  var abt = '.m-faq-main__answer-btn__txt';
  var abi = '.m-faq-main__answer-btn__icon';
  var rc03 = $('.Right-Circle03');
  btn.mouseenter(function () {
    $(this).addClass(smoothing).removeClass(init);
    header__btnTxt.addClass(change__color);
    header__btnIcon.addClass(change__color);
  });
  btn.mouseleave(function () {
    $(this).removeClass(smoothing).addClass(init);
    header__btnTxt.removeClass(change__color);
    header__btnIcon.removeClass(change__color);
  });
  btn_02.mouseenter(function () {
    $(this).addClass(leftRight).removeClass(rightLeft);
    mUnder__txt02.addClass(change__color02);
    footBtn_icon.addClass(change__color02);
  });
  btn_02.mouseleave(function () {
    $(this).removeClass(leftRight).addClass(rightLeft);
    mUnder__txt02.removeClass(change__color02);
    footBtn_icon.removeClass(change__color02);
  });
  btn_03.mouseenter(function () {
    $(this).addClass(lr03).removeClass(rl03);
    $(this).find(abt).addClass(change__color03);
    $(this).find(abi).addClass(change__color03);
    rc03.addClass(change__color03);
  });
  btn_03.mouseleave(function () {
    $(this).removeClass(lr03).addClass(rl03);
    $(this).find(abt).removeClass(change__color03);
    $(this).find(abi).removeClass(change__color03);
    rc03.removeClass(change__color03);
  });
  btn_03.each(function () {
    var btn = $(this);
    btn.mouseenter(function () {
      btn.addClass(lr03).removeClass(rl03);
      btn.find('.m-under-btn03__txt03').addClass(change__color03);
      btn.find('.Right-Circle03').addClass(change__color03);
    });
    btn.mouseleave(function () {
      btn.removeClass(lr03).addClass(rl03);
      btn.find('.m-under-btn03__txt03').removeClass(change__color03);
      btn.find('.Right-Circle03').removeClass(change__color03);
    });
  });
  $('.js-accordion').click(function () {
    $(this).next().slideToggle();
    $(this).find('.UP').toggleClass('rotate');
    $(this).toggleClass('border__bottomNone');
  });
  $('.p-top-main__content10-answer02').hide();
  $('.p-top-main__content10-icon02').addClass('rotate');
  $('.js-accordion02').click(function () {
    $(this).next().slideToggle();
    $(this).find('.close').toggleClass('rotate');
  });

  function checkVisibility() {
    var triggerBottom = $(window).height() * 0.9;
    $('.js-scroll__slide-up').each(function () {
      var elementTop = $(this).offset().top;
      var windowTop = $(window).scrollTop();

      if (elementTop < windowTop + triggerBottom) {
        $(this).addClass('is-active');
      } else {
        $(this).removeClass('is-active');
      }
    });
  }

  $(window).on('scroll', checkVisibility);
  checkVisibility();
  var current = 'current';
  $('.js-faq__link').click(function () {
    $('.js-faq__link').removeClass(current);
    $(this).addClass(current);
  });
  $('#tabBox01Img2').hide();
  $('#tabBox02Img2').hide();
  $('#content01').show();
  $('#content02').hide();
  $('#tabBox01Img1').click(function () {
    $('#tabBox01Img1').hide();
    $('#tabBox01Img2').show();
    $('#tabBox02Img1').hide();
    $('#tabBox02Img2').show();
    $('#content01').show();
    $('#content02').hide();
  });
  $('#tabBox01Img2').click(function () {
    $('#tabBox01Img2').hide();
    $('#tabBox01Img1').show();
    $('#tabBox02Img2').hide();
    $('#tabBox02Img1').show();
    $('#content01').show();
    $('#content02').hide();
  });
  $('#tabBox02Img1').click(function () {
    $('#tabBox02Img1').hide();
    $('#tabBox02Img2').show();
    $('#tabBox01Img1').hide();
    $('#tabBox01Img2').show();
    $('#content01').hide();
    $('#content02').show();
  });
  $('#tabBox02Img2').click(function () {
    $('#tabBox02Img2').hide();
    $('#tabBox02Img1').show();
    $('#tabBox01Img2').hide();
    $('#tabBox01Img1').show();
    $('#content01').hide();
    $('#content02').show();
  });
});
$(window).on("load", function () {// loadLocation();
});
$(window).on("resize", function () {}); // $(window).on("scroll", function () {
// });