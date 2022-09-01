
import { Box, CircularProgress, TextField, Typography} from "@mui/material"
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux'


const useStyle = makeStyles({

mainBox:{
    padding: '0 0px',
    display: 'flex',
    '& div':{
        borderRadius: '12px',
    },
    transition: ' 0.5s',
    '@media only screen and (max-width: 600px)' :{
        transition: ' 0.5s',
        flexDirection:'column !important',
    
       }
    },
    cards: {
        minHeight: '160px',
        padding: '18px',
        marginRight: '24px',
        transition: ' 0.2s',
    },
  

    totalIncomeBox: {
        backgroundColor: 'rgb(94, 53, 177) !important',
        color: 'rgb(255, 255, 255) !important',
        height:'70px',
        padding: '18px',
        backgroundColor: 'rgb(30, 136, 229)', 
        fontSize:'13px',
        transition: ' 0.2s',
        '@media only screen and (max-width: 600px)' :{
            transition: ' 0.2s',
        flex:'1',
        marginRight:'24px'
             
             
            }
     
       
    },
    totalOutcomeBox: {
        backgroundColor: 'rgb(94, 53, 177) !important',
        height:'70px',
        padding: '18px',
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        fontSize:'13px',
        transition: ' 0.2s',
        '@media only screen and (max-width: 600px)' :{
            transition: ' 0.2s',
            flex:'1'
                 
                 
                }
    },



box1:{
    flex: '1',
    backgroundColor: 'rgb(94, 53, 177) !important',
        color: 'rgb(255, 255, 255) !important',
},
box2:{
    flex: '1',
    backgroundColor: 'rgb(30, 136, 229) !important',
        color: 'rgb(255, 255, 255) !important',
        '@media only screen and (max-width: 600px)' :{
            marginRight:'unset',
             backgroundColor:'red'
            }
 
},
box3:{
    flex: '1',
    display: 'flex', 
    justifyContent:'space-between', 
    flexDirection:'column',
    '@media only screen and (max-width: 600px)' :{
       marginTop:'24px',
        flexDirection:'row !important',
     
        
        
       }
},
  
  
})
const OverviewTabs = () => {

    const assets = useSelector(state => state.assets.assets)
 

    const classes = useStyle()
    return (
        <Box className={classes.mainBox} >
<Box sx={{display:'flex',   flex: '3', }}>
            <Box className={`${classes.box1} ${classes.cards} `}>
                totalEarning
            </Box>

            <Box className={` ${classes.box2} ${classes.cards}`}>
                Total Assets
                <Typography sx={{fontSize:'50px'}}>
                {assets.length ? assets.length : <CircularProgress sx={{color:'white'}}/>}
                </Typography>
               
            </Box>
            </Box>
            <Box className={`${classes.box3}`} >
                <Box className={` ${classes.totalIncomeBox}`}>Total Income </Box>
                <Box className={` ${classes.totalOutcomeBox}`}>Total Outcome</Box>
            </Box>


        </Box>
    )
}

export default OverviewTabs
