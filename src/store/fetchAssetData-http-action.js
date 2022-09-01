import {addAssetAction} from '../store/addNewAsset-slice'
import { assetActions } from './asset-slice'

export const fetchAssetData = () => {
return async (dispatch) => {
    const fetchData = async () => {
const response = await fetch('https://asset-manegment-default-rtdb.firebaseio.com/assets.json')
if(!response.ok){
    throw new Error('couldnt fetch')
}
const responseData = await response.json()
const loadedAssets = [];
                for (const key in responseData) {
                    console.log(key);

                    loadedAssets.push({
                        id: key,
                        assetType: responseData[key].assetType,
                        address: responseData[key].address,
                        city: responseData[key].city,
                        costPrice: responseData[key].costPrice,
                        purchaseDate: responseData[key].purchaseDate,
                        squareMeter: responseData[key].squareMeter,
                    })               
                }
        return loadedAssets;

        } 
        try{
       
            const assetData = await fetchData();
            console.log(assetData);
            dispatch(assetActions.replaseAssetData({
               assetInfo: assetData
            }
            ))

        }catch(error){
            console.log('erroe catched');
        }

    }
}

    