import store from '../../assets/js/store';
import { removeItem, updateItemQuantity } from '../../assets/js/slices/order';

document.addEventListener(`DOMContentLoaded`, () => {
	const cartDetails = document.querySelector('.cart-details');
	let cartDetailsContainer = null;

	if (cartDetails) {
		cartDetailsContainer = cartDetails.querySelector('.cart-details__list');
	}

	const handleChangeClick = (evt, payload) => {
		const {
			target: {
				dataset: { id },
			},
		} = evt;

		const { type } = payload;

		store.dispatch(updateItemQuantity({ id: parseInt(id, 10), type }));
	};

	const handleRemoveClick = evt => {
		const {
			target: {
				dataset: { id },
			},
		} = evt;

		store.dispatch(removeItem({ id: parseInt(id, 10) }));
	};

	const createItem = ({ id, name, price, quantity, imageName }) =>
		`
		<li class="cart-details__list-item item">
			<div class="item__container">
				<img class="item__image"
					 src="assets/images/item-${imageName}.jpg"
					 srcset="assets/images/item-${imageName}@2x.jpg 2x"
					 alt="${imageName}" />

				<div class="item__inner">
					<p class="item__name">${name}</p>
					<div class="item__quantity">
						<button class="item__btn item__btn--dec" data-id=${id}"><span>&#8211;</span></button>
						<div class="item__count">${quantity}</div>
						<button class="item__btn item__btn--inc" data-id=${id}"><span>+</span></button>
						<div class="item__price">$&nbsp;${price}</div>
					</div>
				</div>
				<button class="item__btn item__btn--remove item-btn" data-id=${id}">
					<svg class="item-btn__icon icon icon--cross" style="width: 18px; height: 18px;">
						<use xlink:href="#icon-cross" />
					</svg>
				</button>
			</div>
		</li>
		`;

	const render = () => {
		cartDetails.classList.toggle(
			'cart-details--invisible',
			store.getState().order.items.length === 0
		);
		if (cartDetailsContainer) {
			cartDetailsContainer.innerHTML = store
				.getState()
				.order.items.map(item => createItem(item))
				.join('');
		}

		document
			.querySelectorAll('.item__btn--inc')
			.forEach(btn =>
				btn.addEventListener('click', evt => handleChangeClick(evt, { type: 'inc' }))
			);
		document
			.querySelectorAll('.item__btn--dec')
			.forEach(btn =>
				btn.addEventListener('click', evt => handleChangeClick(evt, { type: 'dec' }))
			);
		document
			.querySelectorAll('.item__btn--remove')
			.forEach(btn => btn.addEventListener('click', handleRemoveClick));
	};

	render();
	store.subscribe(render);
});
