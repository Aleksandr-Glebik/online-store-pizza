import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async ( { category, sortBy } ) => {
        const response = await axios.get(`/pizzas?${category !== 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=desc`)

        return response.data
    }
)

const usersAdapter = createEntityAdapter()

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: usersAdapter.getInitialState({
        pizzas: [],
        isLoaded: false,
        error: null
    }),
    reducers: {
        getAllPizzas(state, action) {
            state.pizzas = state.pizzas.concat(action.payload)
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPizzas.pending, (state) => {
            state.isLoaded = true
            state.error = null
        })
        .addCase(fetchPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload
            state.isLoaded = false
            state.error = null
        })
    }
})

export const { getAllPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer