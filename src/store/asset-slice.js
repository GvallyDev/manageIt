import { createSlice } from '@reduxjs/toolkit'

const assetSlice = createSlice({
    name: 'assets',
    initialState: { assets: [], allAssetBookings: [], assetBookings: [], bakerySales: [], assetExpenses: [], changed: false },
    reducers: {
        replaseAssetData(state, action) {
            state.assets = action.payload.assetInfo
        },

        replaceAssetBooking(state, action) {
            state.assetBookings = action.payload.assetBookings.reverse()
        },

        replaceCurentBakerySalse(state, action) {

            state.bakerySales = action.payload.bakerySales
        },

        replaceAllAssetBooking(state, action) {
            state.allAssetBookings = action.payload.allAssetBookings
        },

        replaceAssetExpenses(state, action) {
            state.assetExpenses = action.payload.assetExpenses
        }
    }
})

export const assetActions = assetSlice.actions

export default assetSlice