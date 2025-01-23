
import { addAssetAction } from '../store/addNewAsset-slice'
import { fetchAssetData } from '../store/fetchAssetData-http-action'


export const addNewBooking  = (bookingData,type) => {

const bookings = 'bookings'
const expenses = 'expenses'
const target = (type === 'booking' ? bookings : expenses)

const id = bookingData.id
    return async (dispatch) => {
        dispatch(addAssetAction.toogleSubmitting())
 const sendRequest = async () => {
    
 const response = await fetch(`https://asset-manegment-default-rtdb.firebaseio.com/assets/${id}/${target}.json`, {
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



export const deleteBooking  = (bookingData,assetIdd ,type) => {

    const assetId = assetIdd 
    const bookingId = bookingData.id

        return async (dispatch) => {
            dispatch(addAssetAction.toogleSubmitting())
     const sendRequest = async () => {
     const response = await fetch(`https://asset-manegment-default-rtdb.firebaseio.com/assets/${assetId}/bookings/${bookingId}.json`, {
        method:'DELETE',
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