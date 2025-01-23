
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { DataGrid } from '@mui/x-data-grid';
import { assetActions } from "../store/asset-slice";
import { Button } from '@mui/material';
import { deleteBooking } from '../store/addNewBooking-http-action';




const BookingInfoItem = () => {

  const dispatch = useDispatch()
  const bookings = useSelector(state => state?.assets?.assetBookings)


  const { assetId } = useParams()

  const renderDetailsButton = (params) => {

    return (
      <strong>
        <Button
          variant="contained"
          color="error"
          size="small"
          // style={{ marginLeft: 16 }}
          onClick={() => {
            dispatch(deleteBooking(params, assetId, 'delete'))
          }}
        >
          Delete
            </Button>
      </strong>
    )
  }

  const columns = [

    { field: 'guestName', headerName: 'Name', flex: 1 },
    { field: 'reservationPrice', headerName: 'Price', editable: true },
    // { field: 'comision', headerName: 'comision', flex: 1 },
    { field: 'checkIn', headerName: 'In', type: 'date', flex: 1 },
    { field: 'checkOut', headerName: 'Out', type: 'date', flex: 1 },
    // { field: 'place', headerName: 'Place', flex: 1 },
    { field: 'edit', headerName: 'edit', flex: 1, renderCell: renderDetailsButton },

  ];


  return (
    <>

      <DataGrid
      loading={bookings.length === 0}
        sx={{fontSize:'12px', height: 400, width: '100%', overflowY:'auto !important' }}
        rows={bookings}
        columns={columns}
      />
    </>
  )
}

export default BookingInfoItem



