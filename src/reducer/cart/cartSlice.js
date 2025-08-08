import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	carts: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.quantity += 1;
		},
		decrement: (state, action) => {
			state.quantity -= 1;
		},

		setQuantity: (state, action) => {
			state.quantity = parseInt(action.payload ? action.payload : 0)
		},
	},
});

export const { increment, decrement, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
