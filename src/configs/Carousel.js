const configTrendCarousel = {
  infinite: true,
  centerPadding: '-120px',
  className: 'center',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: 'linear',
  swipeToSlide: true,
  dotsClass: 'slick-dots text-start',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const configCetgoryCarousel = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: 'linear',
  swipeToSlide: true,
  dotsClass: 'slick-dots text-start',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default { configCetgoryCarousel, configTrendCarousel };
