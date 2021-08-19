import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	activeIndex: 2,
};

const paymentProcessSlice = createSlice({
	name: 'paymentProcess',
	initialState,
	reducers: {
		inc: state => (state.activeIndex += 1),
		dec: state => (state.activeIndex -= 1),
	},
});

export const { inc, dec } = paymentProcessSlice.actions;
export default paymentProcessSlice.reducer;
