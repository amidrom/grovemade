$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.products__slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive:[
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3
      }
    },
    {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 690,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
    ]
  });

 });