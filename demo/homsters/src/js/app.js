// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

//=include lib/jquery.validate.min.js

sayHello();

$(document).ready(function() {
	stiky();

	scrolls();

	modal();

	modalForm();

	validation($('.fill-modal__form'));
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

function modal() {

	$('.js-vote').click(function() {
		var modalItem = $(this).data('modal');
		console.log(modalItem)
		$('.vote-modal').fadeIn();
		$('.vote-modal__window[data-modal=' + modalItem + ']').fadeIn();
		$('.stiky-nav').removeClass('stiky-nav-active');
		$('body').addClass('no-active-scroll')
	});

	$('.js-vote-close, .vote-modal__overlay').click(function() {
		$('.vote-modal__window').fadeOut();
		$('.vote-modal').fadeOut();
		$('.stiky-nav').addClass('stiky-nav-active');
		$('body').removeClass('no-active-scroll')
	})

};

function modalForm() {

	$('.step-two__list-item-vote').each(function(i) {
		var $this = $(this);
		$this.attr('data-form', i);
	});

	// не понимаю нужно ли чтобы модальное окно открывалось к 
	// конкретном или только к одному, поэтому пока сделаю на одно модальное окно.

	$('.step-two__list-item-vote').click(function() {
		$('.fill-modal[data-form="0"]').fadeIn();
		$('.stiky-nav').removeClass('stiky-nav-active');
		$('body').addClass('no-active-scroll');

	});

	$('.fill-modal__overlay, .js-form-close').click(function() {
		$('.fill-modal[data-form="0"]').fadeOut();
		$('.stiky-nav').addClass('stiky-nav-active');
		$('body').removeClass('no-active-scroll');
	})
}

function validation(element) {

	element.validate({
		rules: {
			lastname: {
				required: true,
				minlength: 3,
				maxlength: 30
			},
			name: {
				required: true,
				minlength: 3,
				maxlength: 30
			},
			email: {
				required: true,
				email: true
			},
			confirm: {
				required: true
			}
		},

		messages: {
			lastname: {
				required: false,
				minlength: false,
				maxlength: false
			},
			name: {
				required: false,
				minlength: false,
				maxlength: false
			},
			email: {
				required: false,
				email: false
			},
			confirm: {
				required: "Дайте согласие на обработку персональных данных и подтвердите ознакомление с официальными правилами участия"
			}
		},

		submitHandler: function(form) {
			$('.fill-modal').hide();
			$('.thankupage').fadeIn();
			$('.stiky-nav').addClass('stiky-nav-active');
		},

		focusClenaup: true,
		focusInvalid: true

	});
}
