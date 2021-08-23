import store from '../../assets/js/store';

document.addEventListener(`DOMContentLoaded`, () => {
	const { activeIndex } = store.getState().paymentProcess;

	Array.from(document.querySelectorAll('.stages__stage'))
		.reverse()
		.forEach((stage, index) => {
			if (index === activeIndex) {
				stage.classList.add('stage--active');
			}
		});
});
