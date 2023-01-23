import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalPrice: 0,
        totalCount: 0,
    },
    reducers: {
        addCart(state, action) {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                  ? [action.payload]
                  : [...state.items[action.payload.id], action.payload]
            }

            const allPizzas = [].concat.apply([], Object.values(newItems))
            const totalPrice = allPizzas.reduce( (sum, obj) => sum + obj.price, 0)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            }
        },
    }
})

export const { addCart } = cartSlice.actions

export default cartSlice.reducer