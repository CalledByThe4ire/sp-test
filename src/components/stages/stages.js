import store from '../../assets/js/store';

document.addEventListener(`DOMContentLoaded`, () => {
	const { activeIndex } = store.getState().paymentProcess;

	const stages = Array.from(document.querySelectorAll('.stages__stage'));

	if (stages.length !== 0) {
		stages.reverse().forEach((stage, index) => {
			if (index === activeIndex) {
				stage.classList.add('stage--active');
			}
		});
	}
});
