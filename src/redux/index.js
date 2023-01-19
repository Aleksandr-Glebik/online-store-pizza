import { configureStore } from '@reduxjs/toolkit'
import pizzasSlice from './slices/pizzaSlice'
import filterSlice from './slices/filterSlice'

const store = configureStore({
    reducer: {
        pizzas: pizzasSlice,
        filters: filterSlice,
    }
})

export default store

store.subscribe( () => {
    store.getState()
})