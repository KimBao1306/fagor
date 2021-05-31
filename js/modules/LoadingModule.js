export default function LoadingModule(aos) {
	if ($('#page-loading')) {
		$('.page-loading-logo, .page-loading-bg, #page-loading').addClass(
			'--hidden'
		);

		const onAnimationEnd = (element, handler) => {
			var events =
				'animationend transitionend webkitAnimationEnd oanimationend MSAnimationEnd webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd';
			$(element).one(events, handler);
		};

		const runCallback = (e) => {
			aos();
		};

		onAnimationEnd('#page-loading', runCallback);
	}
}
