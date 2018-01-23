$(function() {

	$('nav').on('click','.nav-toggle', function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).closest('nav').toggleClass('nav-is-visible');
	});


	// general mfp opener for all cases
	$('.trigger-popup-img').magnificPopup({
		removalDelay: 200,
		midClick: true,
		type: 'inline',
		mainClass: 'mfp--animated'
	});

	$('.trigger-close-popup').on('click',function(){ $.magnificPopup.close(); });

});
