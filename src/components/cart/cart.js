import store from '../../assets/js/store';

document.addEventListener(`DOMContentLoaded`, () => {
	const cart = document.querySelector('.cart');

	const render = () => {
		if (cart) {
			const len = store.getState().order.items.length;
			cart.classList.toggle('cart--is-empty', len === 0);
			cart.dataset.counter = len;
		}
	};

	render();
	store.subscribe(render);
});
