
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Box, Modal, } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState } from 'react';


const useStyles = makeStyles({
    mainBox: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    mainWraper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        backgroundImage: 'linear-gradient(to right, #9FE2BF, #40E0D0)',

        width: 'fit-content',
        fontSize: '2.5rem',
        padding: '0 20px 0 10px ',
        margin: '20px 0 0 20px'

    },
    up: {
        width: '50px !important',
        height: '50px !important'
    },
    todayBookingCard: {
        background: '#6d83a6',
        borderRadius: '8px',
        padding: '5px',
        margin: '5px'
    },
    curentmonth: {
        border: 'solid 4px black'
    }
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AssetIncome = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const classes = useStyles()
    const assetBookings = useSelector(state => state?.assets?.assetBookings)

    const assets = useSelector(state => state.assets.assets)

    const months = Array.from({ length: 12 }, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString("en", { month: "long" });
    })

    
    const currentYear = new Date().getFullYear()

    let incomes = []
  


    let summ = 0
    let bookedDays = []



    assetBookings.forEach((el, i) => {
        const stayingDates = el.daylyInfo.stayingDates

        stayingDates.map(day => {
        
            bookedDays.push({
                year: new Date(day).getFullYear(),
                month: new Date(day).toLocaleDateString("en", { month: "long"}),
                pricePerNight: el.daylyInfo.pricePerNight,
                totalPaiedPrice: el.reservationPrice,
                place: el.place,
                guestName: el.guestName,
            })
        })
    })


    bookedDays.forEach(el => {
        return summ = summ + Number(el.pricePerNight)
    })

    console.log(bookedDays);

    for (const key in months) {

        let sum = 0
        bookedDays.map(el => {
            if(el.year === 2024){
                
            }
            if (el.month === months[key] && el.year ===  currentYear) {

                sum = sum + Number(el.pricePerNight)
                return sum
            }
        })

        incomes.push({
            year: 'dd',
            months: months[key],
            income: Math.trunc(sum)

        })
    }


    const currentMonth = new Date().toLocaleDateString("en", { month: "long" })

   

    const box = () => {


        return (
            
            incomes.map(el => {
               
        
                if (el.income) {
                    return (
                        <Box className={`${classes.mainWraper} ${el.months === currentMonth && classes.curentmonth}`}>
                            <ArrowUpwardIcon className={classes.up} />
                            <box>

                                <Box>{el.months}</Box>

                                {`${el.income} GEL`}
                                <Box>
                                    {`${(el.income / 2.85).toFixed()} $`}
                                </Box>
                            </box>

                            
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <h3> Today bookings</h3>
                                </Box>
                            </Modal>
                        </Box>

                    )
                }


            })


        )
    }


    return (
        <Box className={classes.mainBox}>
            
            {box()}
        </Box>
    )
}

export default AssetIncome
