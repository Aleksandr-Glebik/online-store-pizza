import { createSlice } from '@reduxjs/toolkit'

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        pizzas: [],
        isLoaded: false
    },
    reducers: {
        getAllPizzas(state, action) {
            state.pizzas = state.pizzas.concat(action.payload)
        },
    }
})

export const { getAllPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer