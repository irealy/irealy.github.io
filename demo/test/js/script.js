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
