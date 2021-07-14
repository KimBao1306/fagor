export default function MfpModule() {
	/** MAGNIFICPOPUP */
	$(document).on('click', '.open-popup-btn, .video-local-btn', function (e) {
		e.preventDefault();
		const link = $(this).attr('href') || $(this).attr('data-mfp-src');
		$.magnificPopup.open({
			items: {
				src: link,
			},
			type: 'inline',
			modal: false, // CLOSE POPUP WHEN CLICK OUTSIDE
			midClick: true,
			removalDelay: 500, // DELAY BEFORE CLOSE POPUP
			preloader: false,
			fixedBgPos: true, // SET HEIGHT BACKGROUND FIX WITH CONTENT
			fixedContentPos: false, // FIXED CONTENT AT CLICKED POSITION
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = 'mfp-zoom-in';
				},
				open: function () {
					$('body').addClass('stop-scrolling');
					if ($(this.content).find('video').length) {
						$(this.content).find('video')[0].play();
					}
				},
				close: function () {
					$('body').removeClass('stop-scrolling');
					if ($(this.content).find('video').length) {
						$(this.content).find('video')[0].load();
					}
				},
			},
		});
	});
	$(document).on('click', '.video-popup, .video-btn', function (e) {
		e.preventDefault();
		const link = $(this).attr('href') || $(this).attr('data-mfp-src') || '';
		// 'https://www.youtube.com/watch?v=C3QKB74zaD8';
		$.magnificPopup.open({
			disableOn: 700,
			items: {
				src: link,
				type: 'iframe',
			},
			mainClass: 'mfp-zoom-in',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			callbacks: {
				open: function () {
					$('body').addClass('stop-scrolling');
				},
				close: function () {
					$('body').removeClass('stop-scrolling');
				},
			},
		});
	});

	// setTimeout(() => {
	if ($('#popup-cart-detail').length) {
		$.magnificPopup.open({
			items: {
				src: '#popup-cart-detail',
			},
			type: 'inline',
			modal: true, // CLOSE POPUP WHEN CLICK OUTSIDE
			midClick: true,
			removalDelay: 500, // DELAY BEFORE CLOSE POPUP
			preloader: false,
			fixedBgPos: true, // SET HEIGHT BACKGROUND FIX WITH CONTENT
			fixedContentPos: false, // FIXED CONTENT AT CLICKED POSITION
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = 'mfp-zoom-in';
				},
				open: function () {
					$('body').css('overflow', 'hidden');
				},
				close: function () {
					$('body').css('overflow', '');
				},
			},
		});
	}
	// }, 5000);
	/** MAGNIFICPOPUP - END*/
}
