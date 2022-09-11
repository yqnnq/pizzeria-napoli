

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



// $(function(){
// 	//クリックで動く
// 	$('.ac-menu').click(function(){
// 		$(this).toggleClass('active');
// 		$(this).siblings('.ac-menu-list').slideToggle();
// 	});
// });

$(function () {
  $('.ac-menu').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});
