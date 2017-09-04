/*!
*	Bootstrap submenu fix
*	Version: 1.1
*	Author web-master72
*/

(function($){

	$(document).ready(function() {

		var navBreakpoint = 991,
			mobileTest;

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

		/* ---------------------------------------------- /*
		 * Nav hover/click dropdown
		/* ---------------------------------------------- */

		$(window).on('resize', function() {

			var menuItem = $('.menu-item-has-children');

			menuItem.unbind('mouseenter mouseleave');
			menuItem.children('a').unbind('click').click(function(e) {
				e.preventDefault();
				$(this).parent().toggleClass('sub-menu-open');
			});

		});

	});

})(jQuery);