/*
 *  util.js is setting up common rule.
 */
if (window.matchMedia("(max-width: 374px)").matches) {
  new ViewportExtra(375);
}

/*===============================================================
共通タブ切り替え
parent => 切り替えスイッチとコンテンツの親
ankerlink => タブ切り替え後にスクロールアニメーションする場所
===============================================================*/
function cmntabInit(parent, ankerlink) {
  var cmntab_parent = parent;
  var cmntab_switch = cmntab_parent + " > .js-tab__switch";
  var cmntab_switch_item =
    cmntab_parent + " > .js-tab__switch .js-tab__switchItem";
  var cmntab_main = cmntab_parent + " > .js-tab__main";
  var cmntab_main_item = cmntab_parent + " > .js-tab__main .js-tab__mainItem";
  $(cmntab_switch_item).on("click", function () {
    var cmntabIndex = $(this).data("tabindex");
    $(cmntab_switch_item).removeClass("is-active");
    $(this).addClass("is-active");
    $(this)
      .parents(cmntab_switch)
      .next(cmntab_main)
      .children(cmntab_main_item)
      .removeClass("is-active");
    $(this)
      .parents(cmntab_switch)
      .next(cmntab_main)
      .children(cmntab_main_item)
      .eq(cmntabIndex)
      .addClass("is-active");

    if (ankerlink) {
      if ($(this).hasClass("disable-anker")) {
        return false;
      }

      var speed = 500;
      var position = $(ankerlink).offset().top;
      var headerHeight = 0;

      // if (window.matchMedia("(max-width: 767px)").matches) {
      //   headerHeight = $("#header").height();
      // }

      $("html, body").animate(
        {
          scrollTop: position - headerHeight,
        },
        speed,
        "swing"
      );
      return false;
    }
  });
}

/*===============================================================
タブ切り替え
スイッチ上下連動
下のスイッチにクラス「dir-prev」を設定する
.js-tab__switch_item.dir-prev
parent => 切り替えスイッチとコンテンツの親
ankerlink => タブ切り替え後にスクロールアニメーションする場所
===============================================================*/
function cmntabLinkageInit(parent, ankerlink) {
  var cmntab_parent = parent;
  var cmntab_switch = cmntab_parent + " > .js-tab__switch";
  var cmntab_switch_item =
    cmntab_parent + " > .js-tab__switch .js-tab__switchItem";
  var cmntab_main = cmntab_parent + " > .js-tab__main";
  var cmntab_main_item = cmntab_parent + " > .js-tab__main .js-tab__mainItem";
  $(cmntab_switch_item).on("click", function (e) {
    var cmntabIndex = $(this).data("tabindex");

    $(cmntab_switch).each(function (index, elm) {
      $(elm).find(".js-tab__switchItem").removeClass("is-active");
      $(elm).find(".js-tab__switchItem").eq(cmntabIndex).addClass("is-active");
    });

    if ($(this).hasClass("dir-prev")) {
      $(this)
        .parents(cmntab_switch)
        .prev(cmntab_main)
        .children(cmntab_main_item)
        .removeClass("is-active");
      $(this)
        .parents(cmntab_switch)
        .prev(cmntab_main)
        .children(cmntab_main_item)
        .eq(cmntabIndex)
        .addClass("is-active");
    }

    $(this)
      .parents(cmntab_switch)
      .next(cmntab_main)
      .children(cmntab_main_item)
      .removeClass("is-active");
    $(this)
      .parents(cmntab_switch)
      .next(cmntab_main)
      .children(cmntab_main_item)
      .eq(cmntabIndex)
      .addClass("is-active");

    if (ankerlink) {
      if ($(this).hasClass("disable-anker")) {
        return false;
      }

      var speed = 500;
      var position = $(ankerlink).offset().top;
      var headerHeight = 0;

      // if (window.matchMedia("(max-width: 767px)").matches) {
      //   headerHeight = $("#header").height();
      // }

      $("html, body").animate(
        {
          scrollTop: position - headerHeight,
        },
        speed,
        "swing"
      );
      return false;
    }

    e.preventDefault();
  });
}

/*===============================================================
タブの中のタブ切り替え
parent => 切り替えスイッチとコンテンツの親
ankerlink => タブ切り替え後にスクロールアニメーションする場所
===============================================================*/
function cmntabInrInit(parent, ankerlink) {
  var cmntab_parent = parent;
  var cmntab_switch = cmntab_parent + " > .js-tabInr__switch";
  var cmntab_switch_item =
    cmntab_parent + " > .js-tabInr__switch .js-tabInr__switchItem";
  var cmntab_main = cmntab_parent + " > .js-tabInr__main";
  var cmntab_main_item =
    cmntab_parent + " > .js-tabInr__main .js-tabInr__mainItem";
  $(cmntab_switch_item).on("click", function () {
    var cmntabIndex = $(this).data("tabindex");
    $(cmntab_switch_item).removeClass("is-active");
    $(this).addClass("is-active");
    $(this)
      .parents(cmntab_switch)
      .next(cmntab_main)
      .children(cmntab_main_item)
      .removeClass("is-active");
    $(this)
      .parents(cmntab_switch)
      .next(cmntab_main)
      .children(cmntab_main_item)
      .eq(cmntabIndex)
      .addClass("is-active");

    if (ankerlink) {
      if ($(this).hasClass("disable-anker")) {
        return false;
      }

      var speed = 500;
      var position = $(ankerlink).offset().top;
      var headerHeight = 0;

      // if (window.matchMedia("(max-width: 767px)").matches) {
      //   headerHeight = $("#header").height();
      // }

      $("html, body").animate(
        {
          scrollTop: position - headerHeight,
        },
        speed,
        "swing"
      );
      return false;
    }
  });
}

/*===================================================
簡易版matchHeight セレクターは詳細に書く
例 ： matchHeight("#consultation .sec2_tab_list > li");
========================================================*/
function matchHeight(target) {
  var hList = [];
  $(target).each(function (index, elm) {
    var h = $(elm).outerHeight();
    hList[index] = h;
  });
  var hListMax = Math.max.apply(null, hList);
  $(target).each(function (index, elm) {
    $(elm).css("height", hListMax + "px");
  });
}

/*================================================
共通トグル
parent => トグルスイッチと開閉するコンテンツの親
ankerlink => トグル後にスクロールアニメーションする場所
=================================================*/
function cmntoggleInit(parent, ankerlink) {
  if ($(parent).length) {
    const cmntoggle_switch = parent + " > .js-toggle__switch";
    const cmntoggle_next = ".js-toggle__next";
    $(cmntoggle_switch).on("click", function () {
      $(this).toggleClass("is-active");
      $(this).next(cmntoggle_next).slideToggle(300);
      if (ankerlink) {
        if ($(this).hasClass("disable-anker")) {
          return false;
        }

        var speed = 500;
        var position = $(ankerlink).offset().top;
        var headerHeight = 0;

        // if (window.matchMedia("(max-width: 767px)").matches) {
        //   headerHeight = $("#header").height();
        // }

        $("html, body").animate(
          {
            scrollTop: position - headerHeight,
          },
          speed,
          "swing"
        );
        return false;
      }
    });
  }
}

/*━━━━━━━━━━━━━━━━━━━━━━━━━
ページ内スクロール
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
function clickScroll() {
  $('a[href^="#"]').on("click", function () {
    var speed = 500;
    var href = $(this).attr("href");
    if ($(this).hasClass("disable-transition")) {
      return false;
    }
    if ($(this).attr("[data-lity]")) {
      return;
    }
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    var headerHeight = 0;
    // if (window.matchMedia("(max-width: 767px)").matches) {
    //   headerHeight = $("#header").height();
    // }
    $("html, body").animate(
      { scrollTop: position - headerHeight },
      speed,
      "swing"
    );
    return false;
  });
}

/*━━━━━━━━━━━━━━━━━━━━━━━━━
スクロールトップ
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
function scrollTop() {
  const pagetop = $(".js-page__top");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.on("click", function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
}

/*================================================
slick slider
Class like

▼各引数

sliderTarget => デフォルト値の配列
"blockName" => スライダーとモジュールの親
"sliderName" => スライダー本体
"sliderItemName" => モジュール（ドットと矢印）

minNum => スライダーの最低数の配列
"minNumPc" => PCの最低数
"minNumSp" => SPの最低数

sliderOptions => スライダーのオプションの配列
"settingPC" => slickのオプション。
"settingSP" => slickをSPで変更する時のオプション。
"moveDots" => ドットをモジュールの中に移動するか
"useOriginalArw" => モジュールの中の矢印を使用するか

================================================*/
function sliderInit() {
  // デフォルト値
  let sliderTargetUtil = {
      blockName: null,
      sliderName: null,
      sliderItemName: null,
    },
    minNumUtil = {
      minNumPc: 1,
      minNumSp: 1,
    },
    sliderOptionsUtil = {
      settingPC: {},
      settingSP: false,
      moveDots: false,
      useOriginalArw: false,
    };
  // 引数で設定したオプションから作成
  const sliderTarget = Object.assign(sliderTargetUtil, arguments[0]),
    minNum = Object.assign(minNumUtil, arguments[1]),
    sliderOptions = Object.assign(sliderOptionsUtil, arguments[2]);
  if (
    sliderTarget.blockName === null ||
    sliderTarget.sliderName === null ||
    sliderTarget.sliderItemName === null
  ) {
    return false;
  }
  // スライダー初期設定
  const slider = `${sliderTarget.blockName} ${sliderTarget.sliderName}`,
    sliderItem = `${slider} ${sliderTarget.sliderItemName}`,
    changeBreakPoint = 767;
  // ドットをjs-slider__modulDotsに置く場合
  let dots = null,
    prev = null,
    next = null;
  if (sliderOptions.moveDots) {
    dots = `${sliderTarget.blockName} .js-slider__modulDots`;
    settingPC.appendDots = $(dots);
  }
  // 矢印をjs-slider__modulArwに置く場合
  if (sliderOptions.useOriginalArw) {
    prev = `${sliderTarget.blockName} .js-slider__modulArw.is-prev`;
    next = `${sliderTarget.blockName} .js-slider__modulArw.is-next`;
  }
  let sliderMin = minNum.minNumPc;
  if (
    minNum.minNumSp &&
    window.matchMedia(`(max-width: ${changeBreakPoint}px)`).matches
  ) {
    sliderMin = minNum.minNumSp;
  }
  if ($(sliderItem).length > sliderMin) {
    $(slider).addClass("has-minSlideItem");
    $(slider).not(".slick-initialized").slick(sliderOptions.settingPC);
    $(prev).on("click", function () {
      $(slider).slick("slickPrev");
    });
    $(next).on("click", function () {
      $(slider).slick("slickNext");
    });
    // SP設定がある時
    if (sliderOptions.settingSP) {
      $(slider).slick(
        "slickSetOption",
        "responsive",
        [
          {
            breakpoint: changeBreakPoint,
            settings: sliderOptions.settingSP,
          },
        ],
        true
      );
      $(window).on("resize", function () {
        $(slider).slick(
          "slickSetOption",
          "responsive",
          [
            {
              breakpoint: changeBreakPoint,
              settings: sliderOptions.settingSP,
            },
          ],
          true
        );
      });
    }
    return $(slider);
  }
}

/*━━━━━━━━━━━━━━━━━━━━━━━━━
SPメニュー
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
function spMenu() {
  const
    $header = $("#header"),
    $spswitch = $("#js-hmb"),
    $spmenu = $("#js-drwNav");
  $spswitch.on("click", function () {
    $header.toggleClass("is-active");
    $(this).toggleClass("is-active");
    $spmenu.toggleClass("is-active");
  });
}

/*==========================
urlに?anker=があるとき
ページ内スクロール
==========================*/
function loadLocation() {
  var speed = 500;
  var url = location.href;
  if (url.match("anker=")) {
    var target = "#" + url.split("?anker=").pop();
    var position = $(target).offset().top;
    var headerHeight = $("#header").height();
    $("html, body").animate(
      { scrollTop: position - headerHeight },
      speed,
      "swing"
    );
    return false;
  }
}

// /*━━━━━━━━━━━━━━━━━━━━━━━━━
// メガメニュー
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// function megaMenu() {
//   var $gnav = $(".l-header__gnav a[data-megamenu]");
//   var $megamenu = $(".l-header__megamenu");
//   var $header = $("#header");
//   var data = "";
//   $gnav.hover(
//     function () {
//       data = $(this).data("megamenu");
//       $header.addClass("js-modal");
//       $megamenu.addClass("is-active");
//       $megamenu.find(".l-header__megamenuItem-" + data).addClass("is-active");
//     },
//     function () {
//       $megamenu.removeClass("is-active");
//       $header.removeClass("js-modal");
//       $megamenu.find(".l-header__megamenuItem").removeClass("is-active");
//       $megamenu.find(".l-header__megamenuItem-" + data).removeClass("is-active");
//     }
//   );
//   $megamenu.hover(
//     function () {
//       $megamenu.addClass("is-active");
//       $header.addClass("js-modal");
//       $megamenu.find(".l-header__megamenuItem-" + data).addClass("is-active");
//     },
//     function () {
//       $megamenu.removeClass("is-active");
//       $header.removeClass("js-modal");
//       $megamenu.find(".l-header__megamenuItem").removeClass("is-active");
//     }
//   );
// }

// /*━━━━━━━━━━━━━━━━━━━━━━━━━
// ヘッダー スクロール表示
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// function headerScroll() {
//   var
//     startPos = 0,
//     winScrollTop = 0,
//     $header = $("#header"),
//     $jsdrwNav = $("#js-drwNav"),
//     headerHeight = $header.height(),
//     timer = null;

//   $(window).on("scroll", function () {
//     clearTimeout( timer );
//     timer = setTimeout(function () {
//       winScrollTop = $(this).scrollTop();
//       if ($jsdrwNav.hasClass("is-active")) {
//         return;
//       } else {
//         if (winScrollTop >= startPos) {
//           if (winScrollTop >= headerHeight) {
//             $header.addClass("js-hide");
//           }
//         } else if(winScrollTop <= startPos) {
//           $header.removeClass("js-hide");
//         }
//       }
//       startPos = winScrollTop;
// 		}, 30 );
//   });
// }

/*━━━━━━━━━━━━━━━━━━━━━━━━━
英語ページ
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// function currentEnPage() {
//   if ($(".l-container-en").length) {
//     $("body").addClass("is-en");
//   }
// }

/*━━━━━━━━━━━━━━━━━━━━━━━━━
ボタンホバー
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// header
// $(document).ready(function(){
//   const btn = $('.js-btn-01');
//   const smoothing = 'smoothing';
//   const init = 'init';
//   const change__color = 'change__color';
//   const header__btnTxt = $('.l-header__btn-txt');
//   const header__btnIcon = $('.l-header__btn-icon');

//   btn.mouseenter(function(){
//     $(this).addClass(smoothing).removeClass(init);
//     $(header__btnTxt).addClass(change__color);
//     $(header__btnIcon).addClass(change__color);
//   });
//   btn.mouseleave(function(){
//     $(this).removeClass(smoothing).addClass(init); 
//     $(header__btnTxt).removeClass(change__color); 
//     $(header__btnIcon).removeClass(change__color); 
//   });
// });



// // footer
// $(document).ready(function(){
//   const btn_02 = $('.js-btn-02');
//   const leftRight = 'left-right';
//   const rightLeft = 'right-left';
//   const change__color02 = 'change__color02';
//   const mUnder__txt02 = $('.m-foot__btn-txt');
//   const footBtn_icon = $('.m-foot__btn-icon');

//   btn_02.mouseenter(function(){
//     $(this).addClass(leftRight).removeClass(rightLeft);
//     $(mUnder__txt02).addClass(change__color02);
//     $(footBtn_icon).addClass(change__color02);
//   });
//   btn_02.mouseleave(function(){
//     $(this).removeClass(leftRight).addClass(rightLeft); 
//     $(mUnder__txt02).removeClass(change__color02); 
//     $(footBtn_icon).removeClass(change__color02); 
//   });
// });

// // faq　ボタン
// $(document).ready(function(){
//   const btn_03 = $('.js-btn-03');
//   const lr03 = 'left-right03';
//   const rl03 = 'right-left03';
//   const cc03 = 'change__color03';
//   const abt = $('.m-faq-main__answer-btn__txt');
//   const abi = $('.m-faq-main__answer-btn__icon');
//   const rc03 = $('.Right-Circle03');

//   btn_03.mouseenter(function(){
//     $(this).addClass(lr03).removeClass(rl03);
//     $(abt).addClass(cc03);
//     $(abi).addClass(cc03);
//     $(rc03).addClass(cc03);
//   });
//   btn_03.mouseleave(function(){
//     $(this).removeClass(lr03).addClass(rl03); 
//     $(abt).removeClass(cc03); 
//     $(abi).removeClass(cc03); 
//     $(rc03).removeClass(cc03); 
//   });
// });

// $(document).ready(function(){
//   const lr03 = 'left-right03';
//   const rl03 = 'right-left03';
//   const cc03 = 'change__color03';

//   $('.js-btn-03').each(function(){
//     const btn = $(this);

//     btn.mouseenter(function(){
//       btn.addClass(lr03).removeClass(rl03);
//       btn.find('.m-under-btn03__txt03').addClass(cc03);
//       btn.find('.Right-Circle03').addClass(cc03);
//     });

//     btn.mouseleave(function(){
//       btn.removeClass(lr03).addClass(rl03); 
//       btn.find('.m-under-btn03__txt03').removeClass(cc03); 
//       btn.find('.Right-Circle03').removeClass(cc03); 
//     });
//   });
// });



// // FAQ アコーディオン
// $(document).ready(function(){
//   $('.js-accordion').click(function(){
//     // クリックされたアイテムの次の要素をスライドトグル
//     $(this).next().slideToggle();
//     // クリックされたアイテムの中の.UPクラスを持つ要素のクラスをトグル
//     $(this).find('.UP').toggleClass('rotate');
//     $(this).toggleClass('border__bottomNone');
//   });

//   // 初期状態設定：2番目の項目は閉じている状態で矢印アイコンは逆向き
//   $('.p-top-main__content10-answer02').hide();
//   $('.p-top-main__content10-icon02').addClass('rotate');
// });


// $(document).ready(function(){
//   $('.js-accordion02').click(function(){
//     $(this).next().slideToggle();
//     $(this).find('.close').toggleClass('rotate'); // .js-accordion内の.UPにrotateクラスをトグル
//     $(this).toggleClass('rotate'); // .js-accordion内の.UPにrotateクラスをトグル
//   });
// });


// // スクロールスライドアニメーション
// $(document).ready(function() {
//   function checkVisibility() {
//       var triggerBottom = $(window).height() * 0.9;

//       $('.js-scroll__slide-up').each(function() {
//           var elementTop = $(this).offset().top;
//           var windowTop = $(window).scrollTop();

//           if (elementTop < windowTop + triggerBottom) {
//               $(this).addClass('is-active');
//           }else{
//             $(this).removeClass('is-active');
//           }
//       });
//   }

//   $(window).on('scroll', checkVisibility);
//   checkVisibility();
// });

// // faq_link　アニメーション
// $(document).ready(function(){
//   const current = 'current';
//   $('.js-faq__link').click(function(){
//     $('.js-faq__link').removeClass(current);

//     $(this).addClass(current);
//   });
// });


// $(document).ready(function() {
//   // 初期状態
//   $('#tabBox01Img2').hide();
//   $('#tabBox02Img2').hide();
//   $('#content01').show();
//   $('#content02').hide();

//   // 1番目の画像をクリックしたときの処理
//   $('#tabBox01Img1').click(function() {
//       $('#tabBox01Img1').hide();
//       $('#tabBox01Img2').show();
//       $('#tabBox02Img1').hide();
//       $('#tabBox02Img2').show();

//       $('#content01').show();
//       $('#content02').hide();
//   });

//   // 2番目の画像をクリックしたときの処理
//   $('#tabBox01Img2').click(function() {
//       $('#tabBox01Img2').hide();
//       $('#tabBox01Img1').show();
//       $('#tabBox02Img2').hide();
//       $('#tabBox02Img1').show();

//       $('#content01').show();
//       $('#content02').hide();
//   });

//   // 3番目の画像をクリックしたときの処理
//   $('#tabBox02Img1').click(function() {
//       $('#tabBox02Img1').hide();
//       $('#tabBox02Img2').show();
//       $('#tabBox01Img1').hide();
//       $('#tabBox01Img2').show();

//       $('#content01').hide();
//       $('#content02').show();
//   });

//   // 4番目の画像をクリックしたときの処理
//   $('#tabBox02Img2').click(function() {
//       $('#tabBox02Img2').hide();
//       $('#tabBox02Img1').show();
//       $('#tabBox01Img2').hide();
//       $('#tabBox01Img1').show();

//       $('#content01').hide();
//       $('#content02').show();
//   });
// });
