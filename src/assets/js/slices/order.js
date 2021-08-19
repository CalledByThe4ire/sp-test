import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	items: [
		{
			id: 0,
			name: 'Amet minim mollit non deserunt ullamco est sit',
			price: 525,
			quantity: 1,
			imageName: 'blazer',
		},
		{
			id: 1,
			name: 'Amet minim mollit non',
			price: 525,
			quantity: 1,
			imageName: 'sneakers',
		},
	],
	tax: 100,
	shipping: 150,
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		removeItem: (state, { payload }) => {
			const { id } = payload;

			state.items = state.items.filter(item => item.id !== id);
		},
		updateItemQuantity: (state, { payload }) => {
			const { id, type } = payload;

			switch (type) {
				case 'inc':
					state.items = state.items.map(item =>
						item.id === id ? { ...item, quantity: item.quantity + 1 } : item
					);
					break;

				case 'dec':
					state.items = state.items
						.map(item => {
							if (item.id === id) {
								if (item.quantity === 1) {
									return null;
								}
								return { ...item, quantity: item.quantity - 1 };
							}
							return item;
						})
						.filter(Boolean);
					break;
				default:
					throw new Error(`Unknown type: ${type}`);
			}
		},
	},
});

export const { removeItem, updateItemQuantity } = orderSlice.actions;
export default orderSlice.reducer;
