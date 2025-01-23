import { addAssetAction } from '../store/addNewAsset-slice'
import { fetchAssetData } from '../store/fetchAssetData-http-action'

export const sendNewAssetData = (assetData) => {
    return async (dispatch) => {
 dispatch(addAssetAction.toogleSubmitting())
 
const sendRequest = async () => {
    const response = await fetch('https://asset-manegment-default-rtdb.firebaseio.com/assets.json',{
        method:'POST',
        body: JSON.stringify(assetData)
    } );
    if(!response.ok){
        throw new Error('somthing went wrong');
    }
 }
 try{
     await sendRequest();
     dispatch(addAssetAction.toogleSubmitting())
 } catch(error){
     console.log(error);
 }finally{
    dispatch(fetchAssetData())
     }

    }
}