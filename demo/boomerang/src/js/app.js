// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function() {

	$('.gallery__slider').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  responsive: [
	  	{
	      breakpoint: 992,
	      settings: {
	        arrows: true,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.hamburger-menu').click(function() {
		$('.navigation__list').slideToggle();
	})

});
