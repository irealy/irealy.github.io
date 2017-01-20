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

	$('.app-tabs__item').each(function(i) {
		var self = $(this);
		self.attr('data-tab', 'tab-' + i);
	});

	$('.app-tabs__content').each(function(i) {
		var self = $(this);
		self.attr('data-tab', 'tab-' + i);
	});

	$('.app-tabs__item').click(function() {
		var self = $(this);
		var dataTab = self.data('tab');
		self.addClass('app-tabs__item_active').siblings().removeClass('app-tabs__item_active');
		$('.app-tabs__content').hide();
		$('.app-tabs__content[data-tab=' + dataTab + ']').fadeIn('normal');

	});

};

function modal() {

	$('.our-clients__item').click(function() {
		
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
	var nav = $('.second-navigation').offset().top;

	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		
		if(scroll > nav) {
			$('.second-navigation').addClass('second-navigation_fixed');
			$('.main-app_js-nav').addClass('main-app_js-nav-active');
		} else {
			$('.second-navigation').removeClass('second-navigation_fixed');
			$('.main-app_js-nav').removeClass('main-app_js-nav-active');
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


