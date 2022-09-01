import { useState } from 'react'
import { Height, PhotoCamera } from "@mui/icons-material"
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@mui/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from 'react-redux'
import {sendNewAssetData} from '../store/addNewAsset-http-action'

const useStyle = makeStyles({
    inputStyle: {
        marginBottom: '12px !important',
       
        
    },
    purchaseDate: {
        marginTop: '20px',
        width: '50px !important',
        height: '50px !important',

    },
    zipM2:{
        display:'flex',
        justifyContent:'space-between !important',
        marginBottom:'12px !important'
    },
    zipM2Inpits:{
        width:'48%'
    }
})

const AddBussinessForm = ({ onClose }) => {
    const [inputValue, setinputValue] = useState({
        image: null,
        purchaseDate: null
    })

    const classes = useStyle()
    const dispatch = useDispatch()

    const changeHandler = (event) => {
        const id = event.target.id || event.target.name
        const value = event.target.value
        setinputValue({ ...inputValue, [id]: value })
    }

    const submitHandler = (e) => {

        e.preventDefault()
        dispatch(sendNewAssetData(inputValue))
        console.log(inputValue);

        onClose()
    }

    return (
        <form onSubmit={submitHandler}>
            <FormControl >
                <InputLabel className={classes.inputStyle} id="assetType">Asset Type</InputLabel>
                <Select
                    className={classes.inputStyle}
                    labelId="assetType"
                    name="assetType"
                    onChange={changeHandler}
                    label="Asset Type"
                >
                    <MenuItem value={'apartament'}>Apartament</MenuItem>
                    <MenuItem value={'house'}>House</MenuItem>
                    <MenuItem value={'bakery'}>Bakery</MenuItem>
                </Select>

                <TextField onChange={changeHandler} className={classes.inputStyle} id="city" label="City" variant="outlined"></TextField>
                <TextField onChange={changeHandler} className={classes.inputStyle} id="address" label="Address" variant="outlined"></TextField>
                <Box className={classes.zipM2}>
                    <TextField onChange={changeHandler} className={classes.zipM2Inpits }id="squareMeter" label="M2" variant="outlined"></TextField>
                    <TextField onChange={changeHandler} className={classes.zipM2Inpits } id="costPrice" label="Cost price" variant="outlined"></TextField>
                </Box>

                <LocalizationProvider className={classes.inputStyle} dateAdapter={AdapterDayjs}>
                    <DatePicker
                        id="purchaseDate"
                        label="Purchase date"
                        onChange={(newValue) => {
                            setinputValue({ ...inputValue, ['purchaseDate']: newValue });
                        }}
                        value={inputValue?.purchaseDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <IconButton className={classes.inputStyle} color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" onChange={(event) => {   console.log(event.target.files[0])
                       }}/>
                    <PhotoCamera className={classes.purchaseDate} />
                </IconButton>


                <LoadingButton
                    type="submit"
                    loading={false}
                    variant="outlined"
                >
                    Submit
                </LoadingButton>

            </FormControl>

        </form>
    )
}

export default AddBussinessForm
