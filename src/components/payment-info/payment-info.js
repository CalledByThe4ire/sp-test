import IMask from 'imask';
import store from '../../assets/js/store';

document.addEventListener(`DOMContentLoaded`, () => {
	const { activeIndex } = store.getState().paymentProcess;

	const forms = document.querySelectorAll('.payment-info');

	if (forms) {
		forms.forEach((form, index) => {
			if (index === activeIndex) {
				form.classList.remove('payment-info--invisible');

				form.querySelectorAll('[name*="credit-card-number"]').forEach(input => {
					IMask(input, {
						mask: '0000',
					});
				});

				IMask(form.querySelector('[name="credit-card-expire-date"]'), {
					mask: '00{/}00',
				});

				IMask(form.querySelector('[name="credit-card-cvv"]'), {
					mask: '000',
				});
			}
		});
	}
});
