var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 1,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 1, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 1,
    loop: true,
    loopedSlides: 1, //looped slides should be the same
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  var aboutSliderText = new Swiper('.about__slider-text', {
    spaceBetween: 1,
    loop: true,
    loopedSlides: 1, //looped slides should be the same
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });