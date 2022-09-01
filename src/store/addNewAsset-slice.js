import {createSlice} from '@reduxjs/toolkit'

const addAssetSlice = createSlice({
    name: 'assets',
    initialState: { isSubmitting: false, },
    reducers: {
        toogleSubmitting(state) {
            state.isSubmitting = !state.isSubmitting
        },
    }
})

export const addAssetAction = addAssetSlice.actions

export default addAssetSlice