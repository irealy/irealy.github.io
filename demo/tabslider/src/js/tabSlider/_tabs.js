let tabBtn = '.js-tab';

$(tabBtn).on("click", function() {
	let that = $(this);
    var slideId = that.attr("data-tab");
    that.addClass('is-active').siblings().removeClass('is-active');
    $('[data-slider="' + slideId + '"').addClass('is-active')
    								   .slick("setPosition")
    								   .siblings()
    								   .removeClass('is-active');
});
