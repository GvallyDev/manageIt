

import {addAssetAction} from '../store/addNewAsset-slice'
import {fetchAssetData} from '../store/fetchAssetData-http-action'


export const addSoldInBakery = (bookingData,  assetId) => {
const sellings = 'selings'
const id = assetId

        return async (dispatch) => {
            // dispatch(addAssetAction.toogleSubmitting())
     const sendRequest = async () => {
        
     const response = await fetch(`https://asset-manegment-default-rtdb.firebaseio.com/assets/${id}/${sellings}.json`, {
        method:'POST',
    body: JSON.stringify(bookingData)
     });
     if(!response.ok){
    
    
        throw new Error('somthing went wrong');
    };
    
     }
     try{
        await sendRequest();
        dispatch(addAssetAction.toogleSubmitting())
    
     }catch(error){
         console.log(error);
     }finally{
    dispatch(fetchAssetData())
     }
        }
    }
    