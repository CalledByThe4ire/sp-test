import store from '../../assets/js/store';

document.addEventListener(`DOMContentLoaded`, () => {
	const { activeIndex } = store.getState().paymentProcess;

	document.querySelectorAll('.stages__stage').forEach((stage, index) => {
		if (index === activeIndex) {
			stage.classList.add('stages__stage--active');
		}
	});
});
