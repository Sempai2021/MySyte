$(function() {
  $('.header__burger').on('click', function(event) {
  $('.header__burger, .header__menu').toggleClass('active')
  $('.header__item-text, .header__logo, .header__timer').toggleClass('active')
  $('body').toggleClass('lock')
  $('.header__bug').toggleClass('active')
    const modal = document.querySelector('.header__bug.active');




    $('.header__bug').on('click', function(event) {
      var target = $(event.target);
      if(target.is('.active') ) {
         $('.header__burger').toggleClass('active')
         $('.header__menu').toggleClass('active')
         $('.header__bug').toggleClass('active')
         $('.header__logo').toggleClass('active')
         $('.header__timer').toggleClass('active')
         $('.header__item-text').toggleClass('active')
      }


    })

  })
})
