let swiper = new Swiper('.product__swiper', {
  // Optional parameters
  loop: true,

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
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1199: {
      spaceBetween: 100,
    }


  },

});


let comments = new Swiper('.comments__swiper', {
  // Optional parameters
  loop: true,

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
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 24,
      slidesPerView: 3,
    }



  },

});

let galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loopedSlides: 0,
      loop: true,
      // loop: true,
      freeMode: true,
       direction: 'vertical',

      // loopedSlides: 5, //looped slides should be the same
      watchSlidesProgress: true,

      navigation: {
    nextEl: '.fotorama__prev',
    prevEl: '.fotorama__next',
  },

  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
    375: {
      spaceBetween: 10,
      slidesPerView: 3,
      direction: 'horizontal',
    },
    577: {
      spaceBetween: 10,
      slidesPerView: 4,
      direction: 'horizontal',
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 4,
      direction: 'vertical',
    },





  },


    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      loop: true,
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











