
// ハンバーガーメニュー
$(function () {
    $('.hamburger').on('click', function () {
      $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
          $('.hamburger-nav').addClass('active');
          $('.mask').addClass('active');
          $('body').addClass('fixed');
        } else {
          $('.hamburger-nav').removeClass('active');
          $('.mask').removeClass('active');
          $('body').removeClass('fixed');
        }

    });
});


// アコーディオンメニュー

// $(function () {
//   $(".ac-menu").hover(function(){
//     $(this).children(".ac-menu-list").stop().slideToggle();
//   });
// });

$(function(){
if(window.matchMedia("(max-width: 768px)").matches){
	$('.ac-menu a').on('click',function(){
    $(this).toggleClass('active');
    $(this).next('.ac-menu-list').stop().slideToggle();
    $('.ac-menu a').not($(this)).siblings('.ac-menu-list').slideUp();
    $('.ac-menu a').not($(this)).removeClass('active');
  });
}else{
  $('.ac-menu a').on('click',function () {
    $(this).toggleClass('active');
    $(this).next('.ac-menu-list').stop().slideToggle();
    $('.ac-menu a').not($(this)).siblings('.ac-menu-list').slideUp();
    $('.ac-menu a').not($(this)).removeClass('active');
  });
}
});


// 文字背景のアニメーション
$(window).on('scroll',function(){
  $(".sec-title").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 100){
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});

// // 文字背景のアニメーション
// $(window).on('scroll',function(){
//   $('.text-wrapper').each(function () {
//     var elemPos = $(this).offset().top - 30;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight) {
//       $(this).addClass('active');
//     } else {
//       $(this).removeClass('active');
//     }
//   });
// });


// 画像のアニメーション
$(window).on('scroll',function(){
  $(".fadeUpTrigger").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 100){
      $(this).addClass('fadeUp');
    // } else {
    // $(this).removeClass('fadeUp');
    }
  });
});

$(window).on('scroll',function(){
  $(".fadeLeftTrigger").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 100){
      $(this).addClass('fadeLeft');
    // } else {
    // $(this).removeClass('fadeLeft');
    }
  });
});

$(window).on('scroll',function(){
  $(".fadeRightTrigger").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 100){
      $(this).addClass('fadeRight');
    // } else {
    // $(this).removeClass('fadeRight');
    }
  });
});


// メッセージページのスライダー
$(".slide-items").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows :false,
  infinite: true,
});

// メッセージの葉っぱ
particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":25,//この数値を変更すると数が増減できる
      "density":{
        "enable":true,
        "value_area":1121.6780303333778
      }
    },
    "color":{
      "value":"#fff"
    },
    "shape":{
      "type":"image",//形状は画像を指定
      "stroke":{
        "width":0,
      },
      "image":{
        "src":"../image/leaf.jpeg",
        "width":120,
        "height":120
      }
    },
    "opacity":{
      "value":0.06409588744762158,
      "random":true,
      "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":7.011985930952697,
      "random":true,
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
    },
    "move":{
      "enable":true,
      "speed":8,//この数値を小さくするとゆっくりな動きになる
      "direction":"bottom-right",//右下に向かって落ちる
      "random":false,//動きはランダムにしない
      "straight":false,//動きをとどめない
      "out_mode":"out",//画面の外に出るように描写
      "bounce":false,//跳ね返りなし
      "attract":{
        "enable":false,
        "rotateX":281.9177489524316,
        "rotateY":127.670995809726
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
      },
      "onclick":{
        "enable":false,
      },
      "resize":true
    }
  },
  "retina_detect":false
});
