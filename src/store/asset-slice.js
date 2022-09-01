import {createSlice} from '@reduxjs/toolkit'

const assetSlice = createSlice({
    name: 'assets',
    initialState:{assets:[], changed: false},
    reducers:{
        replaseAssetData(state, action){
            state.assets = action.payload.assetInfo
        }
    }
})

export const assetActions = assetSlice.actions

export default assetSlice