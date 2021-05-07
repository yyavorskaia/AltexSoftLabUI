$(document).ready(function () {
  $('.offers__slider-list').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    /*autoplay: true,*/
    speed: 1000,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 1000,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});
