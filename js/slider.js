var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 1,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 4, //looped slides should be the same
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 1,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1, //looped slides should be the same
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    thumbs: {
      swiper: galleryTop
    },
  });
  