
// ハンバーガーメニュー
$(function () {
    $('.hamburger').click(function() {
      $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
          $('.hamburger-nav').addClass('active');
          $('.mask').addClass('active');
        } else {
          $('.hamburger-nav').removeClass('active');
          $('.mask').removeClass('active');
        }

    });
});
// //メニュー内を閉じておく
// $(function() {
//     $('.hamburger-nav a[href]').click(function() {
//         $('.hamburger-nav').removeClass('active');
//       $('.hamburger').removeClass('active');
//       $('.mask').removeClass('active');

//     });
// });


// アコーディオンメニュー
$(function () {
  $('.ac-menu').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});


// 文字背景のアニメーション
function TextAnimation() {
  $('.text-wrapper').each(function () {
    var elemPos = $(this).offset().top - 30;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}
  $(window).scroll(function (){
    TextAnimation();
  });
