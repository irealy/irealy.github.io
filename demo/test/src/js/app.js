// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

// sayHello();

$(document).ready(function() {
	$('.burger-menu').on("click", function(e) {
		e.preventDefault();
		$('.navigation__list').slideToggle();
	});

	$(window).resize(function() {
		if($(widnow).width() > 950) {
			$('.navigation__list').removeAttr('style');
		}
	});
})
