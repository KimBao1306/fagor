export default function MenuFixedModule() {
	if (document.querySelector('.header')) {
		/** MENU FIXED WHEN SCROLL */
		const header = document.querySelector('.header');
		const headerHeight = header.offsetHeight;
		const headerOffsetTop = header.offsetTop;
		function checkHeaderFixed() {
			if (scrollY >= headerOffsetTop + headerHeight) {
				header.classList.add('--fixed');
				header.nextElementSibling.style.marginTop = `${headerHeight}px`;
			} else {
				header.classList.remove('--fixed');
				header.nextElementSibling.style.marginTop = 0;
			}
		}
		checkHeaderFixed();
		$(window).on('scroll', checkHeaderFixed);
		/** MENU FIXED WHEN SCROLL - END */
	}
}
