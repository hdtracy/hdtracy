function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}

	});
}

function workBelt() {

	$('.thumb-unit').click(function() {
		$('.work-belt').css('left', '-100%');
	});

	$('.work-return').click(function(){
		$('.work-belt').css('left', '0%');
	});
}

$(function() {
  	smoothScroll(300);
  	workBelt();

 });
