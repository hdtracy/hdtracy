$('#header').load('/assets/html/header.html');
$('#about').load('/assets/html/about.html');
$('#work').load('/assets/html/work.html');
$('#clients').load('/assets/html/clients.html');
$('#footer').load('/assets/html/footer.html');


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
  	smoothScroll(800);
  	workBelt();

 });
