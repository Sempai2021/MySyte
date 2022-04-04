let swiper = new Swiper('.product__swiper', {
  // Optional parameters
  loop: true,
  autoHeight: true,
  slidesPerView: 5,
  spaceBetween: 100,

  navigation: {
    nextEl: '.product__prev',
    prevEl: '.product__next',
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 4,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1199: {
      spaceBetween: 60,
    }


  },

});


let comments = new Swiper('.comments__swiper', {
  // Optional parameters
  loop: true,
  autoHeight: true,

  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    nextEl: '.comments__next',
    prevEl: '.comments__prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 24,
      slidesPerView: 3,
    }



  },

});

let galleryThumbs = new Swiper('.gallery-thumbs', {
      // spaceBetween: 25,
      slidesPerView: 4,
      loop: false,
      loopedSlides: 0,

      // loopedSlides: 5, //looped slides should be the same


      navigation: {
    nextEl: '.fotorama__prev',
    prevEl: '.fotorama__next',
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    375: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 23,
      slidesPerView: 4,
    },



  },

  


    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      loop: false,
      loopedSlides: 0,
       //looped slides should be the same
      navigation: {
        nextEl: '.fotorama__img-next',
        prevEl: '.fotorama__img-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    
    const sane = document.querySelectorAll('.choise__slide');
    const saneItem = document.querySelector('.basket__wrapper');

    if (sane.length < 4) {
      saneItem.classList.add('basket-flex');
    }














