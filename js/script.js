
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
