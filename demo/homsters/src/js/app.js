// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function() {
	stiky();

	scrolls();

	modalForm();
})

function stiky() {
	$(document).scroll(function() {
		var scroll = $(this).scrollTop();

		if(scroll > 350) {
			$('.stiky-nav').addClass('stiky-nav-active');
		} else {
			$('.stiky-nav').removeClass('stiky-nav-active');
		}

	})
}

function scrolls() {

	$('.header__choice-btn').click(function() {
		var firstMarker = $('.header__choice-better').offset().top;
		$('body, html').animate({ scrollTop: firstMarker - 100}, 1000);
	});

	$('.shares__cup-btn').click(function() {
		var presents = $('.vote').offset().top;
		$('body, html').animate({ scrollTop: presents - 100}, 1000);
		$('.step-one').slideDown();
	});

	$('.vote__btn').click(function() {
		$('.step-one').slideDown();
		var stepOne = $('.step-one').offset().top;
		$('body, html').animate({ scrollTop: stepOne - 100}, 1000);
	});

	$('.step-one__item').click(function() {
		var $this = $(this);
		var choiceCity = $this.data('city');

		if($('.step-two').is(':hidden')) {
			$('.step-two').fadeOut('fast');
			$('.step-two[data-city=' + choiceCity + ']').slideDown();
		}
	});

}

function modalForm() {

	$('.step-two__list-item-vote').each(function(i) {
		var $this = $(this);
		$this.attr('data-form', i);
	});

	// не понимаю нужно ли чтобы модальное окно открывалось к 
	// конкретном или только к одному, поэтому пока сделаю на одно модальное окно.

	$('.step-two__list-item-vote').click(function() {
		$('.modal-form[data-form="0"]').fadeIn();
		$('.stiky-nav').removeClass('stiky-nav-active');
		$('body').addClass('no-active-scroll')

	});

	$('.modal-form__overlay, .modal-form__close').click(function() {
		$('.modal-form[data-form="0"]').fadeOut();
		$('.stiky-nav').addClass('stiky-nav-active');
		$('body').removeClass('no-active-scroll')
	})
}

