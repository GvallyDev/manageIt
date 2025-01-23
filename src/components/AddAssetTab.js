
import {useState} from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Box, Modal, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles'
import AddBussinessForm from './AddBussinessForm';
const useStyle = makeStyles({


    addAssetBtn: {
        color:'#7fa8c7',
   width:'80px !important' ,
   height:'80px !important'
      
    },
    addAssetbtnWrapper:{
  border: '#3f5b70 solid 2px',
width:'fit-content',
borderRadius:'8px'
    }
})

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

const AddAssetTab = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    
    const classes = useStyle()
    return (
        
         <Box className={classes.addAssetbtnWrapper}>
           <AddHomeIcon  onClick={handleOpen} className={classes.addAssetBtn}/>
           <Modal
           open={open}
           onClose={handleClose}
           >
   <Box sx={style}>
         <AddBussinessForm onClose={handleClose}/>
        </Box>

           </Modal>

          </Box>
  
    )
}

export default AddAssetTab
