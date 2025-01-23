
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { makeStyles } from "@mui/styles"
import { useDispatch, useSelector } from 'react-redux';
import { addSoldInBakery } from '../store/addSoldInBakery-http-action';
import { useParams } from 'react-router';
import BakeryDetiles from './BakeryDetiles';



const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: '1px',
      width: '25ch',
    },
  },
})




const BakeryHomePage = () => {

  const {assetId} = useParams();

  const dispatch = useDispatch()

  const classes = useStyles();


  const [bakeryInputValue, setBakeryInputValue] = useState({
    date: new Date(),
    inStock: 0,
    addedToStock: '',
    soldToday: '',
    incomePerBag: 120,
    profit: 0,

  });
  

  const handleSubmit = (event) => {
    console.log('ssssss');
    event.preventDefault();
dispatch(addSoldInBakery(bakeryInputValue, assetId))
    // console.log(`Input 1: ${input1Value}, Input 2: ${input2Value}`);
    // do something with the form data
  };



  
const sold2Handler = (event) => {
  
  dispatch(addSoldInBakery({...bakeryInputValue, soldToday: 2}, assetId))

}
console.log(bakeryInputValue);

  return (
    <div>
      <BakeryDetiles/>

<Box>

        <Box  onClick={()=>  dispatch(addSoldInBakery({...bakeryInputValue, soldToday: 1}, assetId))}>1</Box>
        <Box onClick={()=>  dispatch(addSoldInBakery({...bakeryInputValue, soldToday: 2}, assetId))}>2</Box>
        <Box onClick={()=>  dispatch(addSoldInBakery({...bakeryInputValue, soldToday: 3}, assetId))}>3</Box>
        <Box onClick={()=>  dispatch(addSoldInBakery({...bakeryInputValue, soldToday: 4}, assetId))}>4</Box>
</Box>

      <form 
      className={classes.root}
       onSubmit={handleSubmit}>

         <Box sx={{display:'flex'}}>
      <LocalizationProvider 
       sx={{margin:'10px'}}
      dateAdapter={AdapterDateFns}>
  <DatePicker
  sx={{margin:'10px'}}
    label="Basic example"
    value={bakeryInputValue.date}
    onChange={(newValue) => {
      setBakeryInputValue({...bakeryInputValue, date: newValue});
    }}
    renderInput={(params) => <TextField {...params} />}
    />
</LocalizationProvider>

        <TextField
         sx={{margin:'10px'}}

          id='addedToStock'
          type='number'
          label="მიემატა ფქვილი"
          variant="outlined"
          value={bakeryInputValue.addedToStock}
          onChange={(event) => setBakeryInputValue({...bakeryInputValue, [event.target.id] : event.target.value})}
          />
          </Box>
        <TextField
         sx={{margin:'10px'}}
          id='soldToday'
          type='number'
          label="გაიყიდა"
          variant="outlined"
          value={bakeryInputValue.soldToday}
          onChange={(event) => setBakeryInputValue({...bakeryInputValue, [event.target.id] : event.target.value})}
        />

        
        <Button 
         sx={{margin:'10px'}}
        type="submit"
         variant="contained" 
         color="primary">
          Submit
      </Button>
      </form>


    </div>
  )
}


export default BakeryHomePage