$(function(){
  
    var swiper = new Swiper('.carousel-gallery .swiper-container', {
      effect: 'slide',
      speed: 900,
      slidesPerView: 5,
      spaceBetween: 20,
      simulateTouch: true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: '.carousel-gallery .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        // when window width is <= 480px
        425: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    }); /*http://idangero.us/swiper/api/*/
  
    
  
});

// slide 
$(function () {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
  
      // If we need pagination
      pagination: ".swiper-pagination",
  
      // Navigation arrows
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
  
      // And if we need scrollbar
      scrollbar: '.swiper-scrollbar',
  
      autoplay: 3000
    });
  
    var v = document.getElementsByTagName("video")[0];
  
    v.addEventListener(
      "canplay",
      function () {
        mySwiper.stopAutoplay();
      },
      true
    );
  
    v.addEventListener(
      "ended",
      function () {
        mySwiper.startAutoplay();
      },
      true
    );
  });
  
//   second animate