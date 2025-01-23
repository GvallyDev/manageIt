import { assetActions } from './asset-slice'

const fetchData = async () => {
    const response = await fetch('https://asset-manegment-default-rtdb.firebaseio.com/assets.json')
    if (!response.ok) {
        throw new Error('couldnt fetch')
    }
    const responseData = await response.json()

    const loadedAssets = [];
   
    for (const key in responseData) {
        loadedAssets.push({
            id: key,
            title: responseData[key].title,
            assetType: responseData[key].assetType,
            address: responseData[key].address,
            city: responseData[key].city,
            costPrice: responseData[key].costPrice,
            purchaseDate: responseData[key].purchaseDate,
            squareMeter: responseData[key].squareMeter,
            bookings: responseData[key].bookings,
            expenses: responseData[key].expenses,
            sellings: responseData[key].selings,
            images: responseData[key].images,
            avatarImg: responseData[key].avatarImg
        })
    }
    return loadedAssets;
}

export const fetchAssetData = () => {
    return async (dispatch) => {
        try {
            const assetData = await fetchData();
            dispatch(assetActions.replaseAssetData({
                assetInfo: assetData
            }
            ))
        } catch (error) {
            console.log('erroe catched', error);
        }
    }
}



