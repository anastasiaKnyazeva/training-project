$(function(){

  //слайдер баннера
   $('.banner-section__slider').slick({
      dots: true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 969,
          settings: {
            arrows: false
          }
        }
      ]
   });

    // универсально для переключения всех табов на сайте
   $('.tab').on('click', function(e){ //чтобы ссылка никуда не переходила (url меняться не будет)
    e.preventDefault();
      //убираем класс tabs-item--active, так как он должен будет перейти к другому элементу tabs
    $($(this).siblings()).removeClass('tab--active');
      //убираем класс активности при переключении на другой элемент item - кликаем по след элементу и пропадает поле ввода при переходе с предыдущего элемента на следующий
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
      //на тот класс, ктр мы нажали this, далее при переходе к др элементу tabs-item--active будет выделяться нажатый элемент
    $(this).addClass('tab--active');
      //при использовании attr мы забираем значение у ссылок и при нажатии на элемент будем переходить в нужный #tab-1 #tab-2 #tab-3
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
   });

   //добавление в понравившиеся товары
   $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active') //toggleClass при 1 клике добавится при 2 клике уберется
   }); //this чтобы при нажатии на сердечко выделилось только у одного item

   //слайдер популярные товары
   $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
   });

   $('.filter-style').styler();

   $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
   });
   
   $(".js-range-slider").ionRangeSlider({
     type: "double",
     min: 100000,
     max: 500000,
   });

   $('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
   });

   $('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
   });


   $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#C4C4C4"
  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  });


  $('.footer__topdrop').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('footer__topdrop--active');
  });

  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle();
  });
  

});