import { configureStore } from '@reduxjs/toolkit'
import addNewAsset from '../store/addNewAsset-slice'
import assetSlice from './asset-slice';

const store = configureStore({
    reducer:{addNewAsset: addNewAsset.reducer, assets: assetSlice.reducer}
})


export default store;
