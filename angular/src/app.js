$(document).ready(function(){
	console.log('hello my js');

	// my slider
	var slideIndex = 0;
	carousel();

	function carousel() {
		var text = $('.sl-text');
		text.hide();
		var span = $('.sl-span');
		span.removeClass('sl-span-check');
		slideIndex++;
		if (slideIndex > text.length) {
			slideIndex = 1
		} 
		text.eq(slideIndex-1).show(); 
		span.eq(slideIndex-1).addClass('sl-span-check');

    setTimeout(carousel, 5000);
  }


});


