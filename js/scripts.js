//change navbar stlye after they scroll past the carousel
$(function() {
	$(window).scroll(function() {
		/*if($('#main-navbar').offset().top + $('#main-navbar').outerHeight(true) > $('#mainCarousel').height()) {
			$('#main-navbar').addClass('affix');
		}*/

		if($('#main-navbar').offset().top > 100) {
			$('#main-navbar').addClass('affix');
		}

		else {
			$('#main-navbar').removeClass('affix');
		}
	})
})