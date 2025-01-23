import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { FormControl, TextField } from '@mui/material';
import { sendNewAssetData } from '../store/addNewAsset-http-action';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addNewBooking } from '../store/addNewBooking-http-action';

import AddIcon from '@mui/icons-material/Add';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const addBtn = {

    fontSize: '100px',
    color: '#3288f0'
}




const AddAssetOutcomeForm = () => {

    const { assetId } = useParams();
    const [value, setValue] = React.useState(new Date());
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inputValue, setInputValue] = React.useState({
        id: assetId
    });


  const handleRadioChange = (event) => {
      const value = event.target.value
      const id = event.target.id
      
    setInputValue({
        ...inputValue, type: value
    });
    
  };

    const dispatch = useDispatch()

    const changeHandler = (event) => {

        const id = event.target.id
        const value = event.target.value


        setInputValue({ ...inputValue, [id]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setInputValue({ ...inputValue })
        dispatch(addNewBooking(inputValue, 'expenses'))

    }




    return (
        <div>
            <Button onClick={handleOpen}>
                <AddIcon sx={addBtn} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add New Expense Detiles
          </Typography>

                    <form onSubmit={submitHandler}>
                        <FormControl onSubmit>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel id="cleaning" value="cleaning" control={<Radio />} label="Cleaning" />
                                <FormControlLabel id="electricity" value="electricity" control={<Radio />} label="Electricity" />
                                <FormControlLabel id="gas" value="gas" control={<Radio />} label="Gas" />
                                <FormControlLabel id="product"  value="product" control={<Radio />} label="Product" />
                            </RadioGroup>

                            <TextField
                                id="cost"
                                type="number"
                                label="cost"
                                variant="outlined"
                                onChange={changeHandler}
                            />




                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                            >
   <MobileDatePicker
          label="Date mobile"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => {
            setInputValue({...inputValue, date:  `${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`})
          setValue(newValue);
        }}
          renderInput={(params) => <TextField {...params} />}
        />

                            </LocalizationProvider>



                            <Button type='submit' variant="contained">Submit</Button>



                        </FormControl>


                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default AddAssetOutcomeForm
