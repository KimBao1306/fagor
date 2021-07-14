export default function SwiperModule() {
  /** SWIPER */
  // RUN SLIDER IN MOBILE
  let sliderMobileList = [];
  function sliderMobile() {
    var screenWidth = $(window).width();
    if (screenWidth > 991 && sliderMobileList.length !== 0) {
      sliderMobileList.map((s) => s.destroy());
      sliderMobileList = [];
      $('.swiper-wrapper').removeAttr('style');
      $('.swiper-slide').removeAttr('style');
    } else if (screenWidth <= 991 && sliderMobileList.length === 0) {
      $('.is-slider-mobile').each(function () {
        const $this = $(this);
        const $swiper = $this.find('.swiper-container');
        const nextBtn = $this.find('.swiper-button-next');
        const prevBtn = $this.find('.swiper-button-prev');
        const pagination = $this.find('.swiper-pagination');
        const isLoop = $this.hasClass('--loop') || false;
        const isParallax = $this.hasClass('--parallax') || false;
        const isCenter = $this.hasClass('--center') || false;
        const isAuto =
          ($this.hasClass('--auto') && {
            speed: 6000,
            delay: 5000,
            disableOnInteraction: false,
          }) ||
          false;
        const tempSwiper = new Swiper($swiper, {
          speed: 1200,
          // autoHeight: false,
          autoplay: isAuto,
          slidesPerView: 'auto',
          watchSlidesProgress: true,
          // TRIGGER SWIPER RUN ASYNCHRONOUS
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          pagination: {
            el: pagination,
            clickable: true,
          },
          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
          },
          centeredSlides: isCenter,
          parallax: isParallax,
          loop: isLoop,
        });
        sliderMobileList.push(tempSwiper);
      });
    }
  }
  $('.is-slider-mobile').length && sliderMobile();
  $(window).on('resize', function () {
    $('.is-slider-mobile').length && sliderMobile();
  });
  // RUN SLIDER IN MOBILE - END

  // SLIDER COMMON
  function swiper(el, callback = null) {
    const $this = $(el);
    const $swiper = $this.find('.swiper-container');
    const nextBtn = $this.find('.swiper-button-next');
    const prevBtn = $this.find('.swiper-button-prev');
    const pagination = $this.find('.swiper-pagination');
    const isLoop = $this.hasClass('--loop') || false;
    const isParallax = $this.hasClass('--parallax') || false;
    const isAuto =
      ($this.hasClass('--auto') && {
        speed: 6000,
        delay: 5000,
        disableOnInteraction: false,
      }) ||
      false;
    const isCenter = $this.hasClass('--center') || false;
    const swiper_common = new Swiper($swiper, {
      speed: 1200,
      // autoHeight: false,
      autoplay: isAuto,
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: pagination,
        clickable: true,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      centeredSlides: isCenter,
      parallax: isParallax,
      loop: isLoop,
      on: {
        init: function () {
          if (
            this.params.loop &&
            this.el.querySelector('.is-lightgallery') &&
            $('.is-lightgallery').length
          ) {
            $('.is-lightgallery').data('lightGallery').destroy(true);
            $('.is-lightgallery').lightGallery({
              thumbnail: true,
            });
          }
        },
        slideChange: function () {
          callback && callback.call(this);
        },
        // slideChangeTransitionStart: function () {},
      },
    });
    return swiper_common;
  }
  function runSwiperCommon(el) {
    $(el).each((_, s) => {
      swiper(s);
    });
  }
  $('.is-slider.is-slider-common').length &&
    runSwiperCommon('.is-slider.is-slider-common');
  // SLIDER COMMON - END

  // PRODUCT DETAIL
  function productDetail() {
    const thumbsS = new Swiper('.slider-detail-thumbs .swiper-container', {
      speed: 1200,
      direction: 'horizontal',
      slidesPerView: 5,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },
      loop: false,
      breakpoints: {
        768: {
          direction: 'vertical',
          slidesPerView: 'auto',
        },
      },
    });
    const mainS = new Swiper('.slider-detail .swiper-container', {
      speed: 1200,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: $('.slider-detail .swiper-button-next'),
        prevEl: $('.slider-detail .swiper-button-prev'),
      },
      loop: false,
      thumbs: {
        swiper: thumbsS,
      },
    });
  }
  $('.slider-detail .is-slider').length &&
    $('.slider-detail-thumbs .is-slider').length &&
    productDetail();

  // BANNER HOME
  function bannerSlider(el) {
    const $this = $(el);
    const $swiper = $this.find('.swiper-container');
    const nextBtn = $this.find('.swiper-button-next');
    const prevBtn = $this.find('.swiper-button-prev');
    const pagination = $this.find('.swiper-pagination');
    const isLoop = $this.hasClass('--loop') || false;
    const isAuto =
      ($this.hasClass('--auto') && {
        speed: 6000,
        delay: 5000,
        disableOnInteraction: false,
      }) ||
      false;
    const swiper_common = new Swiper($swiper, {
      speed: 1200,
      // autoHeight: false,
      autoplay: isAuto,
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: pagination,
        clickable: true,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      loop: isLoop,
      on: {
        slideChangeTransitionEnd: function () {
          const currentIndex = this.params.loop
            ? this.activeIndex
            : this.realIndex;

          $(`.banner-item`).removeClass('--active');
          $(`.banner-item[data-id=${currentIndex}]`).addClass('--active');

          const bannerListWidth = $('.banner-list').innerWidth();
          const scrollArea = $(window).width() >= 768 ? ((bannerListWidth - 80) / 2) : bannerListWidth
          $('.banner-list').animate({ scrollLeft: `${scrollArea * currentIndex}` }, 600);
        },
      },
    });
    $('.banner-item').on('click', function () {
      const idx = $(this).attr('data-id');
      $(this).addClass('--active').siblings().removeClass('--active');
      swiper_common.slideTo(idx);
    });
    $('.banner-content-btn-mobile').on('click', function () {
      const currentIndex = swiper_common.params.loop
        ? swiper_common.activeIndex
        : swiper_common.realIndex;
      swiper_common.slideNext()
      if (currentIndex === swiper_common.slides.length - 1) {
        swiper_common.slideTo(0)
      };
    });
  }
  $('.banner-slider .is-slider').length &&
    bannerSlider('.banner-slider .is-slider');

  /** SWIPER - END*/
}
