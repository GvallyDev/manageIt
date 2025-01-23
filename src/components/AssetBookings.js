import React from 'react'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { makeStyles } from '@mui/styles'
import AddBookingForm from './AddBookingForm';
import BookingInfoItem from './BookingInfoItem';

const useStyle = makeStyles(theme => ({  
   addBtn: {
   fontSize:'100px',
   color: '#3288f0'
  }
}))

function AssetBookings() {

const classes = useStyle()
    return (
        <div>
          
            <AddBookingForm/>
            <BookingInfoItem/>
        </div>
    )
}

export default AssetBookings
