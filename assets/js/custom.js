(function($) {
  'use strict';
  jQuery(document).on('ready', function() {
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 80) {
        $('.top-menu').addClass('menu-shrink');
      } else {
        $('.top-menu').removeClass('menu-shrink');
      }
    });
    $('.nav li a').on('click', function(e) {
      var anchor = $(this);
      $('html, body').stop().animate(
        {
          scrollTop: $(anchor.attr('href')).offset().top - 50
        },
        1500
      );
      e.preventDefault();
    });
    $(document).on('click', '.navbar-collapse.in', function(e) {
      if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
      }
    });

    $('.screenshot-carousel').owlCarousel({
      nav: true,
      margin: 30,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 500,
      loop: true,
      navText: ["<i class='icofont icofont-swoosh-left'></i>", "<i class='icofont icofont-swoosh-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
    $('.screenshot-carousel-two').owlCarousel({
      nav: true,
      margin: 30,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 500,
      loop: false,
      navText: ["<i class='icofont icofont-swoosh-left'></i>", "<i class='icofont icofont-swoosh-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
    $('.popup_image').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      }
    });
    $('.testimonial-carousel').owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      autoplay: false,
      margin: 40,
      smartSpeed: 500,
      autoplayHoverPause: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        758: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
    $('.faq-panel > .faq-title').on('click', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('.faq-textarea').slideUp(200);
        $('.faq-panel > .faq-title i').removeClass('icofont-minus').addClass('icofont-plus');
      } else {
        $('.faq-panel > .faq-title i').removeClass('icofont-minus').addClass('icofont-plus');
        $(this).find('i').removeClass('icofont-plus').addClass('icofont-minus');
        $('.faq-panel > .faq-title').removeClass('active');
        $(this).addClass('active');
        $('.faq-textarea').slideUp(200);
        $(this).siblings('.faq-textarea').slideDown(200);
      }
    });
    $('body').append(
      '<div id="toTop" class="back-top-button"><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 512 512" x="0px" y="0px" width="40px" height="40px" xmlns:xml="http://www.w3.org/XML/1998/namespace" xml:space="preserve" version="1.1"><g><g><path fill="#e65100" d="M 203.006 214.222 c -2.704 -3.138 -7.44 -3.487 -10.579 -0.784 L 89.932 301.806 c -3.137 2.705 -3.488 7.44 -0.783 10.579 c 1.483 1.721 3.577 2.603 5.684 2.603 c 1.734 0 3.477 -0.599 4.894 -1.819 L 202.223 224.8 C 205.36 222.095 205.711 217.36 203.006 214.222 Z" /></g></g><g><g><path fill="#e65100" d="M 422.263 301.805 l -102.496 -88.367 c -3.137 -2.704 -7.873 -2.353 -10.579 0.783 c -2.705 3.138 -2.354 7.873 0.783 10.579 l 102.496 88.368 c 1.417 1.222 3.159 1.819 4.894 1.819 c 2.106 0 4.201 -0.883 5.684 -2.603 C 425.751 309.245 425.4 304.51 422.263 301.805 Z" /></g></g><g><g><path fill="#e65100" d="M 481.225 292.56 c -4.123 -0.251 -7.694 2.887 -7.95 7.021 c -0.994 16.035 -7.062 30.982 -17.549 43.226 c -26.586 31.044 -74.003 33.448 -104.752 7.087 c -26.123 -22.396 -46.801 -49.695 -61.56 -79.666 c -15.223 -30.914 -24.298 -66.578 -25.799 -87.597 c -0.167 -1.59 1.024 -3.011 2.622 -3.113 c 61.422 -3.925 128.578 14.954 181.072 59.254 c 9.245 7.8 16.475 17.84 20.912 29.033 c 1.526 3.85 5.885 5.734 9.737 4.209 c 3.851 -1.526 5.735 -5.886 4.208 -9.737 c -5.345 -13.486 -14.053 -25.578 -25.182 -34.97 c -32.523 -27.448 -70.567 -46.296 -113.072 -56.02 c -12.376 -2.831 -24.036 -4.614 -34.581 -5.7 c 20.619 -28.46 15.229 -68.432 -12.571 -90.211 c 14.722 -32.075 44.049 -54.552 79.278 -60.479 c 4.085 -0.687 6.839 -4.556 6.152 -8.641 c -0.687 -4.085 -4.555 -6.841 -8.641 -6.152 c -20.34 3.422 -39.612 12.004 -55.734 24.816 c -14.399 11.444 -26.023 26.072 -33.927 42.587 c -2.581 -1.197 -5.259 -2.247 -8.034 -3.12 c -3.953 -1.243 -8.162 0.951 -9.407 4.902 s 0.951 8.162 4.902 9.407 c 4.145 1.305 8.019 3.102 11.579 5.307 c 0.176 0.136 0.353 0.265 0.532 0.38 c 0.156 0.1 0.321 0.175 0.482 0.262 c 27.476 17.937 30.753 57.015 6.846 79.43 h -69.376 c -27.973 -26.227 -17.948 -73.61 19.438 -85.38 c 3.951 -1.244 6.146 -5.455 4.902 -9.407 c -1.244 -3.951 -5.454 -6.147 -9.406 -4.902 c -3.237 1.019 -6.344 2.275 -9.316 3.732 c -7.907 -16.766 -19.638 -31.615 -34.214 -43.199 c -16.122 -12.813 -35.394 -21.395 -55.734 -24.816 c -4.082 -0.688 -7.953 2.067 -8.64 6.152 c -0.688 4.084 2.067 7.953 6.151 8.641 c 35.568 5.984 65.13 28.836 79.708 61.406 c -14.864 12.194 -23.925 30.589 -23.925 50.781 c 0 13.99 4.451 27.404 12.494 38.503 c -53.614 5.52 -104.865 25.607 -147.654 61.721 c -62.332 52.599 -26.235 155.701 56.97 155.701 c 19.264 0 37.761 -6.037 53.215 -17.323 c -2.271 35.273 14.998 69.33 46.027 88.203 c 24.074 14.642 27.36 17.501 37.172 19.194 v 31.415 c 0 4.143 3.358 7.5 7.5 7.5 c 4.142 0 7.5 -3.357 7.5 -7.5 v -31.578 c 9.188 -1.807 11.502 -3.994 40.372 -21.554 c 29.992 -18.243 46.187 -51.746 42.516 -85.914 c 37.063 27.31 90.248 22.588 120.633 -12.889 c 12.625 -14.74 19.93 -32.741 21.128 -52.057 C 488.503 296.376 485.359 292.816 481.225 292.56 Z M 216.681 74.236 c -0.065 0.109 -0.113 0.225 -0.172 0.337 c -0.006 0.004 -0.011 0.008 -0.017 0.013 C 216.553 74.468 216.612 74.351 216.681 74.236 Z M 299.974 316.762 h -87.751 c 8.718 -11.918 15.982 -23.946 22.032 -35.718 h 43.686 C 283.992 292.816 291.255 304.844 299.974 316.762 Z M 270.795 266.043 h -29.394 c 6.615 -15.032 11.336 -29.347 14.697 -42.113 C 259.459 236.696 264.18 251.012 270.795 266.043 Z M 161.222 349.895 c -15.016 12.873 -34.233 19.244 -54.121 17.949 c -66.07 -4.314 -92.337 -86.772 -42.213 -129.07 c 45.167 -38.116 102.446 -59.693 169.336 -59.693 c 12.489 0.16 12.862 0.435 13.706 1.435 c 0.904 1.073 0.675 1.988 0.432 4.099 C 241.246 246.236 210.495 307.653 161.222 349.895 Z M 296.174 438.552 l -26.737 16.263 c -8.52 5.182 -19.107 5.183 -27.628 -0.001 c -24.393 -14.837 -27.001 -16.092 -33.43 -21.615 h 95.472 C 301.43 435.12 298.872 436.912 296.174 438.552 Z M 318.092 418.198 H 194.859 c -7.479 -10.692 -12.217 -22.865 -13.926 -35.718 h 150.655 C 330.257 395.3 325.594 407.678 318.092 418.198 Z M 180.328 367.479 L 180.328 367.479 c 0.362 -6.983 1.457 -11.925 2.723 -17.207 c 6.245 -6.056 12.013 -12.245 17.337 -18.51 h 111.419 c 4.973 5.852 10.328 11.64 16.103 17.313 c 1.817 7.576 3.029 11.799 3.701 18.404 H 180.328 Z" /></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>'
    );
    $(window).scroll(function() {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });
    $('#toTop').on('click', function() {
      $('html, body').animate(
        {
          scrollTop: 0
        },
        600
      );
      return false;
    });
    $('.slide-btn-white, .slide-btn-bordered, .default-button').on('click', function(e) {
      var anchor = $(this);
      $('html, body').stop().animate(
        {
          scrollTop: $(anchor.attr('href')).offset().top - 30
        },
        1500
      );
      e.preventDefault();
    });
    jQuery(function() {
      jQuery('body').on('keydown', '#contact_name, #contact_email, #contact_subject, #contact_phone, #contact_message', function(e) {
        console.log(this.value);
        if (e.which === 32 && e.target.selectionStart === 0) {
          return false;
        }
      });
    });
    $('.intro').css({
      'margin-top': -($('.intro').height() / 2)
    });
  });
  jQuery(window).on('load', function() {
    jQuery('.preloader-wrap').fadeOut(500);
  });
})(jQuery);
