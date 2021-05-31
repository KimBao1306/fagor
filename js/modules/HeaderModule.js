export default function HeaderModule() {
	/** MENU BUTTON */
	if (
		$('.header .hamburger-btn').length &&
		$('.header__list-wrap').length &&
		$('.overlay').length
	) {
		$('.header .hamburger-btn').on('click', function () {
			$('.header .hamburger-btn').toggleClass('--active');
			$('.header__list-wrap').toggleClass('--active');
			$('body').toggleClass('stop-scrolling menu-in');
		});

		$('.overlay').on('click', function () {
			$('.hamburger-btn').removeClass('--active');
			$('.header__list-wrap').removeClass('--active');
			// CLOSE ALL MENU WHEN CLICK OUTSIDE
			$('.header__list  .dropdown')
				.removeClass('--show')
				.find('.sub-menu')
				.slideUp();
			$('.header__list  .dropdown .fa').removeClass('--active');

			// REMOVE CLASS SCROLL BODY
			$('body').removeClass('stop-scrolling menu-in');
			// REMOVE FILTER MENU
			$('.pd-filter').removeClass('--active');
			// REMOVE CART
			$('.cart').removeClass('--active');
		});
	}
	/** MENU BUTTON - END*/

	/* HEADER SEARCH */
	$('.header-search-icon').on('click', function () {
		$('.search-mobile').addClass('--active');
		$('body').addClass('stop-scrolling');
	});
	$('.search-mobile-close').on('click', function () {
		$('.search-mobile').removeClass('--active');
		$('body').removeClass('stop-scrolling');
	});
	/* HEADER SEARCH - END */
}
