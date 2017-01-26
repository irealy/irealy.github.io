// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

//=include lib/jquery.validate.min.js

sayHello();
$(document).ready(function() {

	$('.content__body-rules-label span').click(function() {
		$('.modal-rules, .modal-rules__overlay').fadeIn();
		$('body').addClass('modal-active');
	});

	$('.modal-rules__close, .modal-rules__overlay').click(function() {
		$('.modal-rules, .modal-rules__overlay').fadeOut();
		$('body').removeClass('modal-active');
	})


	// form validation 

	$('#form1').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			fornavn: {
				required: true
			},
			efternavn: {
				required: true
			}
		},

		messages: {
			email: {
				required: 'Email is required',
				email: 'Your email address must be in the format of name@domain.com'
			},
			fornavn: {
				required: 'Fornavn is required'
			},
			efternavn: {
				required: 'Efternavn is required'
			}
		},

		submitHandler: function(form) {
			$(form).hide();
			$('#form2').fadeIn();
		},

		showErrors: function(errorMap, errorList) {
			$('.content__body-errors-count').html('Please fix the following ' + this.numberOfInvalids() + ' errors: <div class="toggle"></div>');
			$('.toggle').html("Hide<span></span>");
			this.defaultShowErrors();
		},
		errorContainer: '.content__body-errors',
		errorLabelContainer: ".content__body-errors-messages ul",
		wrapper: "li",

		// focusClenaup: true,
		onkeyup: false,
		focusInvalid: true

	});

	

	$('#form2').validate({
		rules: {
			addresse: {
				required: true
			},
			telefonnummer: {
				required: true
			},
			day: {
				required: true
			},
			month: {
				required: true
			},
			year: {
				required: true
			},
			sex: {
				required: true
			},
			ruls: {
				required: true
			}
		},

		messages: {
			addresse: {
				required: 'Addresse is required'
			},
			telefonnummer: {
				required: 'Telefonnummer is required'
			},
			day: {
				required: 'Day is required'
			},
			month: {
				required: 'Month is required'
			},
			year: {
				required: 'Year is required'
			},
			sex: {
				required: 'Køn is required'
			},
			ruls: {
				required: 'Check confirm'
			}
		},

		showErrors: function(errorMap, errorList) {
			$('.content__body-errors-count').html('Please fix the following ' + this.numberOfInvalids() + ' errors: <div class="toggle"></div>');
			$('.toggle').html("Hide<span></span>");
			this.defaultShowErrors();
		},
		errorContainer: '.content__body-errors',
		errorLabelContainer: ".content__body-errors-messages ul",
		wrapper: "li",

		focusClenaup: true,
		focusInvalid: true
	});

	$('.content__body-errors-count, .toggle').click(function() {

		if($('.content__body-errors-messages').is(':hidden')) {
			$('.content__body-errors-messages').show();
			if($('.toggle').html() == 'Show<span class="show"></span>') {
				$('.toggle').html('Hide<span></span>');
			}
		} else {
			$('.content__body-errors-messages').hide();
			if($('.toggle').html() == 'Hide<span></span>') {
				$('.toggle').html('Show<span class="show"></span>');
			}
		}
	})




});



