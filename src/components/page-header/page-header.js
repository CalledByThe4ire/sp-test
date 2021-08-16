document.addEventListener(`DOMContentLoaded`, () => {
	const breakpoint = window.matchMedia(`only screen and (max-width: 1199px)`);
	const menu = document.querySelector('.main-nav');
	const trigger = document.querySelector('.trigger');

	const toggleMenu = (el, state) => {
		let icon = null;
		let use = null;

		if (el) {
			icon = el.querySelector('.icon');
			use = icon.querySelector('use');
		}

		if (state === 'close') {
			if (icon) {
				icon.classList.remove('burger__icon', 'icon--burger');
				icon.classList.add('cross__icon', 'icon--cross');
				icon.style.cssText = 'width: 22px; height: 22px';
				icon.setAttribute('viewBox', '0 0 19 18');

				if (use) {
					use.setAttribute('xlink:href', '#icon-cross');
				}
			}

			if (menu) {
				menu.classList.remove('main-nav--hidden');
			}
		} else if (state === 'open') {
			if (icon) {
				icon.classList.remove('cross__icon', 'icon--cross');
				icon.classList.add('burger__icon', 'icon--burger');
				icon.style.cssText = 'width: 29px; height: 22px';
				icon.setAttribute('viewBox', '0 0 29 22');

				if (use) {
					use.setAttribute('xlink:href', '#icon-burger');
				}
			}

			if (menu) {
				menu.classList.add('main-nav--hidden');
			}
		} else {
			throw new Error(`Unknown state: ${state}`);
		}
	};

	const handleClick = ({ currentTarget }) => {
		const icon = currentTarget.querySelector('.icon');

		if (icon) {
			if (icon.classList.contains('icon--burger')) {
				toggleMenu(currentTarget, 'close');
			} else if (icon.classList.contains('icon--cross')) {
				toggleMenu(currentTarget, 'open');
			}
		}
	};

	const breakpointChecker = () => {
		if (breakpoint.matches) {
			toggleMenu(trigger, 'open');
		} else {
			toggleMenu(trigger, 'close');
		}
	};

	trigger.addEventListener('click', handleClick);

	breakpointChecker(trigger);
	breakpoint.addListener(breakpointChecker);

	if (module.hot) {
		module.hot.dispose(() => {
			document.body.removeEventListener('click', handleClick);
			breakpoint.removeListener(breakpointChecker);
		});
	}
});
