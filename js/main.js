$(window).scroll(function () {
   if ($(window).scrollTop() < 20) {
      $(".header").css("background", "transparent")
   }
   else {
      $(".header").css("background", "linear-gradient(to right,  #007065,#00b2a0c2 ")
   }
});

$(document).ready(function () {
   var $button = $('.header__burger-btn');
   $button.click(function () {
      $('.header__burger-wrap').show();
   })
   $('.header__burger-btn-close').click(function () {
      $('.header__burger-wrap').hide();
   })
   $('.header__item-link').click(function () {
      $('.header__burger-wrap').hide();
   })
   $('.header__burger-wrap').click(function () {
      $('.header__burger-wrap').hide();
   })
})
