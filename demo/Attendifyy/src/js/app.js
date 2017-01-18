// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function() {

	tabs();

});

function tabs() {

	$('.app-tabs__content:not(:first)').hide();

	$('.app-tabs__item').each(function(i) {
		var self = $(this);
		self.attr('data-tab', 'tab-' + i);
	});

	$('.app-tabs__content').each(function(i) {
		var me = $(this);
		me.attr('data-tab', 'tab-' + i);
	});

	$('.app-tabs__item').click(function() {
		var self = $(this);
		var dataTab = self.data('tab');
		self.addClass('app-tabs__item_active').siblings().removeClass('app-tabs__item_active');
		$('.app-tabs__content').hide();
		$('.app-tabs__content[data-tab=' + dataTab + ']').fadeIn('normal');

	});

};
