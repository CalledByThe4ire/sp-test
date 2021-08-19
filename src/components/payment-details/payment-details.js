import store from '../../assets/js/store';

document.addEventListener(`DOMContentLoaded`, () => {
	const paymentDetailsContainer = document.querySelector('.payment-details');
	let paymentDetailsSubtotal = null;
	let paymentDetailsTax = null;
	let paymentDetailsShipping = null;
	let paymentDetailsTotal = null;

	if (paymentDetailsContainer) {
		paymentDetailsSubtotal = paymentDetailsContainer.querySelector('[data-name="subtotal"]');
		paymentDetailsTax = paymentDetailsContainer.querySelector('[data-name="tax"]');
		paymentDetailsShipping = paymentDetailsContainer.querySelector('[data-name="shipping"]');
		paymentDetailsTotal = paymentDetailsContainer.querySelector('[data-name="total"]');
	}

	const calcSubtotal = () =>
		store.getState().order.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

	const calcTotal = () => {
		const subtotal = calcSubtotal();
		const tax = store.getState().order.tax;
		const shipping = store.getState().order.shipping;

		return subtotal + tax + shipping;
	};

	const render = () => {
		paymentDetailsContainer.classList.toggle(
			'payment-details--invisible',
			store.getState().order.items.length === 0
		);

		if (paymentDetailsSubtotal) {
			paymentDetailsSubtotal.textContent = `$${calcSubtotal().toLocaleString('ru-RU')}`;
		}

		if (paymentDetailsTax) {
			paymentDetailsTax.textContent = `$${store.getState().order.tax.toLocaleString('ru-RU')}`;
		}

		if (paymentDetailsShipping) {
			paymentDetailsShipping.textContent = `$${store
				.getState()
				.order.shipping.toLocaleString('ru-RU')}`;
		}

		if (paymentDetailsTotal) {
			paymentDetailsTotal.textContent = `$${calcTotal().toLocaleString('ru-RU')}`;
		}
	};

	render();
	store.subscribe(render);
});
