import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        category: 0,
        sortBy: {
            type: 'rating',
        }
    },
    reducers: {
        setCategory(state, action) {
            state.category = action.payload
        },
        setSortByType(state, action) {
            state.sortBy.type = action.payload
        }
    }
})

export const { setCategory, setSortByType } = filterSlice.actions

export default filterSlice.reducer