var positionY;
var image;

function parallaxEffect() {
  positionY = window.pageYOffset;
  image = document.getElementsByClassName('header');

  image.style.top = positionY * .4 + 'px';
}
window.addEventListener('scroll', parallaxEffect);


$(function(){
 var shrinkHeader = 150;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.top_line').addClass('shrink');
        }
        else {
            $('.top_line').removeClass('shrink');
        }
      if ( scroll >= shrinkHeader ) {
           $('.logo_head').addClass('shrink');
        }
        else {
            $('.logo_head').removeClass('shrink');
        }
      if ( scroll >= shrinkHeader ) {
           $('.logo').addClass('shrink');
        }
        else {
            $('.logo').removeClass('shrink');
        }
      if ( scroll >= shrinkHeader ) {
           $('.menu').addClass('shrink');
        }
        else {
            $('.menu').removeClass('shrink');
        }
      if ( scroll >= shrinkHeader ) {
           $('.fa-home').addClass('shrink');
        }
        else {
            $('.fa-home').removeClass('shrink');
        }   
  });
function getCurrentScroll() {
    return window.pageYOffset;
    }
});


$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(){
  $(".btn_head").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function(){
  $(".logo").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
