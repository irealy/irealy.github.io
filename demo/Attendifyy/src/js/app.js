// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function() {

	tabs();

	modal();

	stiky();

	adaptiveMenu()

});

function tabs() {

	$('.app-tabs__content:not(:first)').hide();

	$('.app-tabs__list-point').each(function(i) {
		var self = $(this);
		self.attr('data-tab', 'tab-' + i);
	});

	$('.app-tabs__content').each(function(i) {
		var self = $(this);
		self.attr('data-tab', 'tab-' + i);
	});

	$('.app-tabs__list-point').click(function() {
		var self = $(this);
		var dataTab = self.data('tab');
		self.addClass('point-is-active').siblings().removeClass('point-is-active');
		$('.app-tabs__content').hide();
		$('.app-tabs__content[data-tab=' + dataTab + ']').fadeIn('normal');

	});

};

function modal() {

	$('.our-clients__block').click(function() {
		
		$('.our-clients__wrap').hide();
		$('.our-clients__modal').fadeIn();

		if($(window).width() < 950) {
			var destination = $('.our-clients__descr').offset().top;
			$('html, body').scrollTop(destination);
		}
	});

	$('.our-clients__modal-close').click(function() {
		$('.our-clients__modal').hide()
		$('.our-clients__wrap').fadeIn();
	});

};

function stiky() {
	var nav = $('.main-app').offset().top;

	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		
		if(scroll > nav) {
			$('.navigation').addClass('navigation_fixed');
			$('.action-buttons__link_login').addClass('login-is-fixed');
			$('.navigation__logo img').attr('src', 'img/second-logo.png');
			$('.navigation__list-item').addClass('navigation__list-item_second');
			$('.navigation__btn').addClass('navigation__btn_fixed');
		} else {
			$('.navigation').removeClass('navigation_fixed');
			$('.action-buttons__link_login').removeClass('login-is-fixed');
			$('.navigation__logo img').attr('src', 'img/logo.png');
			$('.navigation__list-item').removeClass('navigation__list-item_second');
			$('.navigation__btn').removeClass('navigation__btn_fixed');
		}
	});

};

function adaptiveMenu() {
	$('.navigation__btn').click(function() {
		$('.toogle-navigation').addClass('toogle-navigation__active');
		$('body').addClass('menu-active');
	});

	$('.toogle-navigation__close, .toggle-navigation__item').click(function() {
		$('.toogle-navigation').removeClass('toogle-navigation__active');
		$('body').removeClass('menu-active');
	});

}


