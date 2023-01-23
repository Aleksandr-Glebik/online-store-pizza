import { configureStore } from '@reduxjs/toolkit'
import pizzasSlice from './slices/pizzaSlice'
import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice'

const store = configureStore({
    reducer: {
        pizzas: pizzasSlice,
        filters: filterSlice,
        cart: cartSlice
    }
})

export default store

store.subscribe( () => {
    store.getState()
})