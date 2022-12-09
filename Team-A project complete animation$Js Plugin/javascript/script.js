// screnn shot  slider js 

$(document).ready(function(){
    $('.slide_container').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
    });
  });

  // testimonial slider js
  $(document).ready(function(){
    $('.testimonial_slider').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade:true,
    });
  });

  // team slide js
  $(document).ready(function(){
    $('.team_slide_container').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        focusOnSelect:true,
    });
  });

// counter up js
$('.counter').counterUp({
  delay: 5,
  time: 1000,
});

// wow js
new WOW().init();