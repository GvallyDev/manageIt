
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { DataGrid } from '@mui/x-data-grid';
import { assetActions } from "../store/asset-slice";



const BookingsPage = () => {
    const assets = useSelector(state => state.assets.assets)
    const allBookings = []

    
   
const columns = [
   
    { field: 'guestName', headerName: 'Guest', flex: 1 },
    { field: 'reservationPrice', headerName: 'Reservation Price', flex: 1, editable: true },
    { field: 'comision', headerName: 'comision', flex: 1 },
    { field: 'checkIn', headerName: 'checkIn',type: 'date' ,flex: 1 },
    { field: 'checkOut', headerName: 'checkOut',type: 'date', flex: 1 },
    { field: 'place', headerName: 'place', flex: 1 },
  ];


   
    assets.forEach((el)=> {
        for (const key in el?.bookings) {

                allBookings.push({
                    id: key,
                    guestName:el?.bookings[key].guesName,
                    comision:el?.bookings[key].comisions,
                    reservationPrice: el?.bookings[key].reservationPrice,
                    checkIn: new Date( el?.bookings[key].checkIn).toLocaleDateString(),
                    checkOut: new Date( el?.bookings[key].checkOut).toLocaleDateString(),
                    place: el?.title,
                    
                })          
            }
    })
   
    return (
        <>
        
    <DataGrid
     sx = {{ height:700, width: '100%'}}
        rows={allBookings}
        columns={columns}
       
      />
    
    
          
        </>
    )
}

export default BookingsPage
