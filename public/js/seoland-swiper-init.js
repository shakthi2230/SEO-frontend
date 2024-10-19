(function(jQuery) {

"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var jQuerywindow = jQuery(window),
    jQuerydocument = jQuery(document),
    jQuerybody = jQuery('body');

//Check if function exists
jQuery.fn.exists = function () {
  return this.length > 0;
};

function swiperslider() {

var bannerswiper = new Swiper(".banner-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        effect: "fade",
        autoplay: {
            delay: 7000,
            disableOnInteraction: false
          },
       navigation: {
          nextEl: "#banner-swiper-button-next",
          prevEl: "#banner-swiper-button-prev",
        },
        loop: true,
      });

var portfolioswiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,

          pagination: {
        el: "#portfolio-pagination",
        clickable: true,
      },
       navigation: {
          nextEl: "#portfolio-swiper-button-next",
          prevEl: "#portfolio-swiper-button-prev",
        },
        speed: 2500,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });


var testimonialswiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 2500,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        },
      });

var testimonialswiper2 = new Swiper(".testimonial-swiper2", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2500,
        loop: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      });

var teamswiper = new Swiper(".team-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
        pagination: {
        el: "#team-pagination",
        clickable: true,
      },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });

var postswiper = new Swiper(".post-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
        pagination: {
        el: "#post-pagination",
        clickable: true,
      },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });


var serviceswiper = new Swiper(".service-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
        pagination: {
        el: "#service-pagination",
        clickable: true,
      },
       navigation: {
          nextEl: "#service-swiper-button-next",
          prevEl: "#service-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
      });

var serviceswiper2 = new Swiper(".service-swiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
        pagination: {
        el: "#service-pagination",
        clickable: true,
      },
       navigation: {
          nextEl: "#service-swiper-button-next",
          prevEl: "#service-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
      });

var clientswiper = new Swiper(".client-swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
        pagination: {
        el: "#client-pagination",
        clickable: true,
      },
       navigation: {
          nextEl: "#client-swiper-button-next",
          prevEl: "#client-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
           640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      });

};


/*------------------------------------
  HT Window load and functions
--------------------------------------*/
jQuery(document).ready(function() {
    swiperslider();
});

})(jQuery);