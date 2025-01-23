import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addNewBooking } from '../store/addNewBooking-http-action';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display:'flex',
  flexDirection:'column',
  gap:'16px',
  p: 4,
};

const addBtn = {

  fontSize: '100px',
  color: '#3288f0'
}

function AddBookingForm() {
  const { assetId } = useParams();
  const [value, setValue] = React.useState([null, null]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = React.useState({
    daylyInfo: ''
  });
 
  const allAssets = useSelector((state) => state.assets.assets)
  const dispatch = useDispatch()

  const changeHandler = (event) => {
    const { id, value } = event.target
    setInputValue({ ...inputValue, [id]: value })
  }

  const placeSelectHandler = (event) => {
    const {  value } = event.target
    setInputValue({ ...inputValue, id: value })
  }

  const getDateArray = function (start, end, fullPrice) {
    let arr = new Array();
    let dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    arr.splice(- 1);
    const guestInfo = {
      nights: arr.length,
      stayingDates: arr,
      pricePerNight: fullPrice / arr.length
    }
    return guestInfo;
  }



  React.useEffect(() => {

    setInputValue({
      ...inputValue, ...value,
      daylyInfo: getDateArray(new Date(inputValue?.checkIn), new Date(inputValue?.checkOut), inputValue?.reservationPrice)
    })

  }, [value])


  const dateChangeHandler = (newValue) => {
    setValue(newValue);

    setInputValue({ ...inputValue, checkIn: `${newValue[0].$d}`, checkOut: `${newValue[1].$d}` })
    setValue(newValue);
  }

  const submitHandler = (e) => {

    e.preventDefault()
    dispatch(addNewBooking(inputValue, 'booking'))
    setOpen(false)
  }


  return (
    <div>
      <Button onClick={handleOpen}>
        <BookmarkAddIcon sx={addBtn} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Booking Detiles
          </Typography>

          <form onSubmit={submitHandler}>
            <FormControl onSubmit>
          <div style={{
            display:'flex',
            flexDirection:'column',
            gap: '12px'
          }}>


                <Select
                    id="id"
                    labelId="id"
                    name="id"
                    onChange={placeSelectHandler}
                    label="Asset Type"
                >
                  {allAssets.map((asset) => {
                  return <MenuItem id={asset.id} value={asset.id}>{asset.title}</MenuItem>
                  
                })}
                </Select> 




              <TextField
                id="guesName"
                label="Guest Name"
                variant="outlined"
                onChange={changeHandler}
                required
              />

              <TextField
                id="reservationPrice"
                type="number"
                label="Total Reservation Price"
                variant="outlined"
                onChange={changeHandler}
                required
              />

              <TextField
                id="comisions"
                label="Comisions"
                type="number"
                variant="outlined"
                onChange={changeHandler}
                required
              />
              <LocalizationProvider
              
                dateAdapter={AdapterDayjs}
                localeText={{ start: 'Check-in', end: 'Check-out' }}
              >
                <DateRangePicker
                required
                  value={value}
                  onChange={dateChangeHandler}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>



              <Button type='submit' variant="contained">Submit</Button>


              </div>
            </FormControl>


          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddBookingForm
