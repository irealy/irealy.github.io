$(document).ready(function() {
	// add DOM 
	$('.select__item').each(function() {
	    var $this = $(this);
	    $this.wrap('<div class="select"></div>');                           
	    $this.after('<div class="select__placeholder">Выбрать *</div>');    

	    var list = $this.next('.select__placeholder');
	    var listitem = $('<ul class="select__list" />').insertAfter(list);
        
	    var number = $this.children('option').length;
	    for (var i = 0; i < number; i++) {
	        $('<li>' + $this.children('option').eq(i).text() + '</li>').appendTo(listitem);
	    }
	});
	// add text to placeholder and .active
	$('.select__list li').click(function() {
		var $this = $(this);
		var text = $this.text();
		$this.parent().siblings('.select__placeholder').text(text);
		$this.attr('class', 'active')
			 .siblings().removeAttr('class', 'active');
		$('.select__list').slideUp();
	});
	// add selected='selected' 
	$('.select__list li').each(function(i) {
		var $this = $(this);
		$this.click(function() {
			 $('.select__item option').eq(i)
			 .attr('selected', 'selected')
			 .siblings().removeAttr('selected', 'selected');
		})
	});
	// show select list
	$('.select__placeholder').click(function() {
		var $this = $(this);
		$this.next().slideToggle();
	});
	// hide select list 
	$(document).mouseup(function (e) { 
		var selectList = $(".select__list"); 
		if (!selectList.is(e.target) && selectList.has(e.target).length === 0) { 
			selectList.slideUp(); 
		}
	});
			
});