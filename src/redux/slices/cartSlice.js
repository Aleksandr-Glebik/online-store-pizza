import { createSlice } from '@reduxjs/toolkit'

const getTotalPrice = (arr) => arr.reduce( (sum, obj) => sum + obj.price, 0)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalPrice: 0,
        totalCount: 0,
    },
    reducers: {
        addCart(state, action) {
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
        clearCart(state) {
            state.items = {}
            state.totalPrice = 0
            state.totalCount = 0
        },
        deleteOneGroupPizza(state, action) {
            const newItems = {
                ...state.items,
            }
            const currentTotalPrice = newItems[action.payload].totalPriceCurrentPizzaGroup
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]

            state.items = newItems
            state.totalPrice = state.totalPrice - currentTotalPrice
            state.totalCount = state.totalCount - currentTotalCount
        }
    }
})

export const { addCart, clearCart, deleteOneGroupPizza } = cartSlice.actions

export default cartSlice.reducer