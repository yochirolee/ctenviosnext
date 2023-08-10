import { create } from "zustand";

export const useCartStore = create((set) => ({
	products: [],

	total: 0,

	open: false,
	setOpen: () =>
		set((state) => ({
			...state,
			open: !state.open,
		})),

	addToCart: (product) => {
		set((state) => ({
			...state,
			products: state.products.some((item) => item.id === product.id)
				? state.products.map((item) =>
						item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
				  )
				: state.products.concat({ ...product, quantity: 1 }),
		}));
	},

	removeFromCart: (product) =>
		set((state) => ({
			...state,
			products: state.products.filter((item) => item.id !== product.id),
		})),
	clearCart: () => set({ cart: [] }),
	getCartTotal: () => set((state) => state.products.reduce((total, item) => total + item.price, 0)),
}));
