$(document).ready(function () {
    $('.slider-about').slick({
        arrows: false,
        dots: true,
        appendDots: $('.tumbler-about')
    });
    $("#myTab li:eq(0) a").tab('show');
    $('.clients-slider').slick({
        arrows: true,
        dots: true,
        appendDots: $('.clients-tumbler'),
        slidesToShow: 7,
        slidesToScroll: 7,
        appendArrows: $('.clients-arrows'),
        prevArrow: '<button class="slider-prev"><i class="flaticon-left-arrow"></i></button>',
        nextArrow: '<button class="slider-next"><i class="flaticon-right-arrow"></i></button>',

          responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6
            },
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5
            },
            breakpoint: 580,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false
            }

          }]
    });
    $('.project-slider').slick({
        arrows: true,
        dots: true,
        appendDots: $('.project-tumbler'),
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.project-arrows'),
        prevArrow: '<button class="slider-prev"><i class="flaticon-back"></i></button>',
        nextArrow: '<button class="slider-next"><i class="flaticon-next"></i></button>',
    });
    $('.sol-top-slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.sol-top-tumbler'),
        slidesToShow: 1,
        slidesToScroll: 1,

    });
    $('.help-sys-slider').slick({
        arrows: true,
        dots: false,
        appendArrows: $('.help-sys-arrows'),
        prevArrow: '<button class="slider-prev"><i class="flaticon-back"></i></button>',
        nextArrow: '<button class="slider-next"><i class="flaticon-next"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.screens-sp-slider').slick({
        arrows: true,
        dots: false,
        appendArrows: $('.screens-sp-arrows'),
        prevArrow: '<button class="slider-prev"><i class="flaticon-back"></i></button>',
        nextArrow: '<button class="slider-next"><i class="flaticon-next"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      },
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      },

      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false
      }

    }]
    });

    $('.screens-mini-slider').slick({
        arrows:true,
        dots:false,
        appendArrows: $('.screens-mini-arrows'),
         prevArrow: '<button class="slider-prev"><i class="flaticon-back"></i></button>',
        nextArrow: '<button class="slider-next"><i class="flaticon-next"></i></button>',
        slidesToShow: 2,
        slidesToScroll: 2,
        infinity: true,

        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      },
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      },

      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    }]
        

    });
    $().fancybox({
        selector: '[data-fancybox="screens-sp"]',
        thumbs: false,
        hash: false,
    });
    
    var maxheight2 = $('.a-down-wrap-two').height() + 10;
    $('.a-down').bind('click', function (evt) {
        evt.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {

            $('.a-down-wrap').css('max-height', $('.a-down-wrapper').height());
        } else {

            $('.a-down-wrap').css('max-height', maxheight2);
        }
    });

    var maxheight = $('.a-down-wrap-one').height();

    

    $('.a-down-one').bind('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {

            $('.a-down-wrap-one').css('max-height', $('.a-down-wrapper-one').height());
        } else {

            $('.a-down-wrap-one').css('max-height', maxheight);
        }
    });
    



    $('.cross').bind('click', function () {
      $(this).parents('.bg-popup').fadeOut();
  });

  $('.openmodal').bind('click', function () {
      console.log('dsd');
      var data = $(this).attr('data');
      $('.bg-popup[data="' + data + '"]').fadeIn();
  });
   
  
});

// var maxheight = $('.a-down-wrap').height();
//  // When the window has finished loading create our google map below
//  google.maps.event.addDomListener(window, 'load', init);
 
//      function init() {
//          // Basic options for a simple Google Map
//          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//          var mapOptions = {
//              // How zoomed in you want the map to start at (always required)
//              zoom: 18,
 
//              // The latitude and longitude to center the map (always required)
//              center: new google.maps.LatLng(55.864474, 37.472112), // New York
 
 
//          };
 
//          // Get the HTML DOM element that will contain your map 
//          // We are using a div with id="map" seen below in the <body>
//          var mapElement = document.getElementById('conf-map');
 
//          // Create the Google Map using our element and options defined above
//          var map = new google.maps.Map(mapElement, mapOptions);
 
//          // Let's also add a marker while we're at it
//         var image = 'img/map/location.png';
//          var marker = new google.maps.Marker({
//              position: new google.maps.LatLng(55.864474, 37.472112),
//              map: map,
//              icon: image,
//              title: ''
//          });
//      };
      // When the window has finished loading create our google map below

 
  

    //  jQuery(document).ready(function($) {
    //   $('.mh').matchHeight();
    // });

    // google.maps.event.addDomListener(window, 'load', init);
 
    //  function init() {
    //      // Basic options for a simple Google Map
    //      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    //      var mapOptions = {
    //          // How zoomed in you want the map to start at (always required)
    //          zoom: 10,
 
    //          // The latitude and longitude to center the map (always required)
    //          center: new google.maps.LatLng(55.787080, 37.671161), // New York
    //          disableDefaultUI: true,
    //          styles: [
    //             {
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#f5f5f5"
    //                 }
    //               ]
    //             },
    //             {
    //               "elementType": "labels.icon",
    //               "stylers": [
    //                 {
    //                   "visibility": "off"
    //                 }
    //               ]
    //             },
    //             {
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#616161"
    //                 }
    //               ]
    //             },
    //             {
    //               "elementType": "labels.text.stroke",
    //               "stylers": [
    //                 {
    //                   "color": "#f5f5f5"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "administrative.land_parcel",
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#bdbdbd"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "poi",
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#eeeeee"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "poi",
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#757575"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "poi.park",
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#e5e5e5"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "poi.park",
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#9e9e9e"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "road",
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#ffffff"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "road.arterial",
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#757575"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "road.highway",
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#dadada"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "road.highway",
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#616161"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "road.local",
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#9e9e9e"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "transit.line",
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#e5e5e5"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "transit.station",
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#eeeeee"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "water",
    //               "elementType": "geometry",
    //               "stylers": [
    //                 {
    //                   "color": "#c9c9c9"
    //                 }
    //               ]
    //             },
    //             {
    //               "featureType": "water",
    //               "elementType": "labels.text.fill",
    //               "stylers": [
    //                 {
    //                   "color": "#9e9e9e"
    //                 }
    //               ]
    //             }
    //           ]
 
    //      };
 
    //      // Get the HTML DOM element that will contain your map 
    //      // We are using a div with id="map" seen below in the <body>
    //      var mapElement = document.getElementById('Moscow-map');
 
    //      // Create the Google Map using our element and options defined above
    //      var map = new google.maps.Map(mapElement, mapOptions);
 
    //      // Let's also add a marker while we're at it  
         
    //  }


$(document).ready(function () {
      $('.navbar-toggler').bind('click',function(){
      $('.main-menu').slideToggle();
      $('.navbar-toggler').toggleClass('burger-active');
    })   
});