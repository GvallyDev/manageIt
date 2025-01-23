import {addAssetAction} from '../store/addNewAsset-slice'


export const registerNewBooking = (bookingData) => {
return async ( dispatch) => {
    dispatch(addAssetAction.toogleSubmitting())

    const sendRequest =  async () => {
    const response = await fetch( `
    https://asset-manegment-default-rtdb.firebaseio.com/assets/${assetId}/bookings.json
    `, 
    {method: 'PUT',
    body: JSON.stringify(bookingData)

});
if(!response.ok){
    throw new Error('somthing went wrong');
}
    }

    try {
         await sendRequest()
         dispatch(addAssetAction.toogleSubmitting())
    }
         catch (error) {
             console.log(error);
         }
}
}
    

