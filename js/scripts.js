//change navbar style after they scroll past the carousel
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

$(document).ready(function(){
  $("a").on('click', function(event) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    
  });
});