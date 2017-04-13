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

  $('.cart-body .ras').on('click', function(event) {
  	var cartBody = $(this).parents('.cart-body')
  	var cartImg = cartBody.find('img');
  	cartImg.eq(0).removeClass('show').addClass('hide');
  	cartImg.eq(1).removeClass('hide').addClass('show');
  });

  $('.cart-body .tom').on('click', function(event) {
  	var cartBody = $(this).parents('.cart-body')
  	var cartImg = cartBody.find('img');
  	cartImg.eq(1).removeClass('show').addClass('hide');
  	cartImg.eq(0).removeClass('hide').addClass('show');
  });
  $('.cart-body .cart-size').on('click', function(ev){

  	$(this).parents('#cart-size').toggleClass('img-size');
  	console.log($(this));
  });

  // $.ajax({
  // 	method:'GET',
  // 	url: 'https://jsonplaceholder.typicode.com/photos',
  // 	dataType: 'json'
  // }).done(function(data) {
  // 		console.log(data);
  // 		$.map(data, function(post, i){
  // 			$('#jsonholder').append('<h2>' + post.title + '</h2><img src="' + 
  // 				post.url + '"><p>' + post.thumbnailUrl + '</p>');
  // 		})
  // });


});


