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
})

/*$('a[href*="#"]') 
	.not("[href='#']")
	.not("[href='#0']")
	.click(function(event) {

	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $("[name=]" + this.hash.slice(1) + ']');

		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function () {
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) {
					return false;
				} else {
					$target.attr('tabindex', '-1');
					$target.focus();
				};
			});
		}
	}
})*/



  /*$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
}); */

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

