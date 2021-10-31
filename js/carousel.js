$(document).ready(function() {
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'easy',
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		waitForAnimate: false,
		centerMode: true,
		variableWidth: true,
	});
});