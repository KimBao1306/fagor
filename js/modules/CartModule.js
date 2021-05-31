export default function CartModule() {
	$('.cart-btn').on('click', function () {
		$('.cart').addClass('--active');
		$('body').addClass('stop-scrolling');
	});

	$('.cart-close').on('click', function () {
		$('.cart').removeClass('--active');
		$('.cart-wrap').removeClass('--next-step --previous-step');
		$('body').removeClass('stop-scrolling');
	});
	$('.cart-next-mobile').on('click', function () {
		$('.cart-wrap').addClass('--next-step');

		const isNextStep = $(this).parent().hasClass('--next-step');
		const isPreviousStep = $(this).parent().hasClass('--previous-step');

		if (isNextStep) {
			$('.cart-wrap').addClass('--previous-step');
		}

		if (isPreviousStep) {
			$('.cart-wrap').removeClass('--next-step --previous-step');
		}
	});
}
