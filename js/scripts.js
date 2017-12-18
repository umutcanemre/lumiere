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
			//$('#main-navbar').removeClass('affix');
		}
	})
});


$(function() {
  $('.scroll-btn').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

