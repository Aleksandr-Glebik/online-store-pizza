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
            const getTotalPrice = (arr) => arr.reduce( (sum, obj) => sum + obj.price, 0)

            const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPriceCurrentPizzaGroup: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map( (obj) => obj.items)
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas)

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