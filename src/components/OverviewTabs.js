
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import HouseIcon from '@mui/icons-material/House';
import { useState } from "react";

import AddBookingForm from "./AddBookingForm";




const useStyle = makeStyles({

    mainBox: {
        padding: '16px',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',

        '& div': {
            borderRadius: '12px',
        },
        transition: ' 0.5s',
        '@media only screen and (max-width: 600px)': {
            transition: ' 0.5s',
            flexDirection: 'column !important',

        }
    },
    cards: {
        minHeight: '160px',
        padding: '18px',

        transition: ' 0.5s',
    },


    totalIncomeBox: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        backgroundColor: '#A0E7E5 !important',
        color: 'rgb(255, 255, 255) !important',
        height: '70px',
        padding: '18px',

        backgroundColor: 'rgb(30, 136, 229)',
        fontSize: '13px',
        transition: ' 0.2s',
        '@media only screen and (max-width: 600px)': {
            transition: ' 0.2s',
            flex: '1',
            marginRight: '24px'


        }


    },
    totalOutcomeBox: {
        backgroundColor: 'rgb(94, 53, 177) !important',
        height: '70px',
        padding: '18px',
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        fontSize: '13px',
        transition: ' 0.2s',
        '@media only screen and (max-width: 600px)': {
            transition: ' 0.2s',
            flex: '1'


        }
    },



    box1: {
        flex: '1',
        backgroundColor: 'rgb(94, 53, 177) !important',
        color: 'rgb(255, 255, 255) !important',

    },
    box2: {
        flex: '1',
        backgroundColor: 'rgb(30, 136, 229) !important',
        color: 'rgb(255, 255, 255) !important',
        // marginLeft: '24px !important',
        '@media only screen and (max-width: 600px)': {
            marginRight: 'unset',

        }

    },
    box3: {
        flex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '@media only screen and (max-width: 600px)': {
            marginTop: '24px',
            flexDirection: 'row !important',



        }
    },
    earningBoxLeft: {

        '@media only screen and (max-width: 600px)': {
            flexDirection: 'column',
            marginRight: '16px'
        }
    },
    earningBox: {

        '@media only screen and (max-width: 600px)': {
            flexDirection: 'column',
        }
    },
    assetBox: {
        display: 'flex',
        alignItems: 'center'

    },
    todayBookingCard: {
        background: '#4A5859',
        color: 'white',
        borderRadius: '8px',
        padding: '5px',
        margin: '5px'
    },
    incomeCard: {
        borderRadius: '8px',
        backgroundColor: '#5398BE',
        height: '90%',
        overflow: 'auto'
    }

})

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height:'80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const OverviewTabs = () => {
    const assets = useSelector(state => state.assets.assets)
    const [open, setOpen] = useState(false)
    const [openFut, setOpenFut] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenFut = () => setOpenFut(true);
    const handleCloseFut = () => setOpenFut(false);

    const classes = useStyle()
    let totalEarnings = []
    let additionalExpenses = []
    let allBookings = []
    const allBakerySales = []

    const bookings = assets.map((el) => el.bookings)
    const expenses = assets.map((el) => el.expenses)
    const allBakerySale = assets.filter((el) => el.sellings)

    bookings.map((el) => {
        for (const key in el) {

            totalEarnings.push({
                id: key,
                checkIn: el[key]?.checkIn,
                checkOut: el[key]?.checkOut,
                comision: el[key]?.comisions,
                reservationPrice: el[key]?.reservationPrice,
                comision: el[key]?.comisions
            })
        }
    })
    assets.forEach((el) => {
        for (const key in el?.bookings) {

            allBookings.push({
                id: key,
                guestName: el?.bookings[key].guesName,
                comision: el?.bookings[key].comisions,
                reservationPrice: el?.bookings[key].reservationPrice,
                checkIn: el?.bookings[key].checkIn,
                checkOut: el?.bookings[key].checkOut,
                place: el?.title,
                dailyInfo: el?.bookings[key]?.daylyInfo

            })
        }


        for (const key in el.sellings) {

            allBakerySales.push({
                id: key,
                soldToday: Number(el.sellings[key]?.soldToday),
                addedToStock: Number(el.sellings[key]?.addedToStock),
                date: el.sellings[key]?.date,
                incomePerBag: el.sellings[key]?.incomePerBag,
                profit: el.sellings[key]?.profit,
            })
        }
    })


    let totalBougthBags = 0
    let totalBagsSold = 0
    let totalIncome = 0
    let starterr = 0
    let todayIncomeFromBakery = 0
    let avgProfitPerBeg = 0

    allBakerySales.forEach((el, i) => {
        totalBougthBags += el.addedToStock
        totalBagsSold += el.soldToday
        totalIncome += (el.soldToday * el.incomePerBag);
        starterr = starterr + Number(el.addedToStock) - Number(el.soldToday);

        (new Date(el.date).toLocaleDateString() === new Date().toLocaleDateString()) && (todayIncomeFromBakery = el.soldToday * 120)

    })
    avgProfitPerBeg = (totalIncome - totalBougthBags * 50) / totalBagsSold


    expenses.map((el) => {

        for (const key in el) {
            additionalExpenses.push({
                id: key,
                cost: el[key]?.cost,
            })
        }
    })

    let totalOutcome = 0
    let totalEarningss = 0
    let dailyIncome = 0

    let daylyComisions = 0
    let monthlyComisions = 0
    let lastWeekIncome = 0
    let futureIncome = 0
    const today = new Date().setHours(0, 0, 0, 0)

    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);


    let todayCheckedIn = []
    let futureSatying = []

    allBookings.map((ell) => {

        ell.dailyInfo.stayingDates.map(el => {
            if ((new Date(el).getTime() === today) || (new Date(el).getTime() === today + 3600000) || (new Date(el).getTime() === today - 3600000)) {
                daylyComisions = daylyComisions + Number(ell.comision) / ell.dailyInfo.nights
                dailyIncome = dailyIncome + Number(ell?.dailyInfo.pricePerNight)
                todayCheckedIn.push(ell)

            } else if (new Date(el).getTime() < today && new Date(el).getTime() >= firstDay) {

                lastWeekIncome = lastWeekIncome + Number(ell?.dailyInfo.pricePerNight)

                monthlyComisions = monthlyComisions + Number(ell.comision) / ell.dailyInfo.nights
            } else if (new Date(el).getTime() > today) {
                futureIncome = futureIncome + Number(ell?.dailyInfo.pricePerNight)
                futureSatying.push(ell)
            }
        })
    })

    let redused = []
    futureSatying?.filter((el, i) => {

        if (el?.id !== futureSatying[i + 1]?.id) {
            redused.push(el)
        }
    })

    totalEarnings.map((el) => {
        const thisYear = new Date().getFullYear()
        const checkInYear = new Date(el.checkIn).getFullYear() 
        const checkOutYear = new Date(el.checkOut).getFullYear() 
        console.log(checkInYear, checkOutYear, el)
        if(( checkOutYear) === thisYear){
            totalEarningss = totalEarningss + Number(el?.reservationPrice)
        }
        totalOutcome = totalOutcome + Number(el?.comision)
    })
    additionalExpenses.map((el) => {
        totalOutcome = totalOutcome + Number(el.cost)
    })



    const housesQty = (
        <Box className={classes.assetBox}>
            {assets.length}
            <HouseIcon sx={{ fontSize: '50px' }} />
        </Box>)


    return (
        <Box  className={classes.mainBox} >
            <h1  > OVERVIEW </h1>
            <Box sx={{ display: 'flex', flex: '4', }}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <span onClick={handleClose} >X</span>
                        <h3> Incomes From Today</h3>
                        <Box className={classes.incomeCard}>
                            {todayCheckedIn.map((el, i) => {
                                return (
                                    <Box className={classes.todayBookingCard}>
                                        {`${i + 1}: ${el.dailyInfo.pricePerNight | 0}ლ | Place: ${el.place} | until: ${new Date(el.checkOut).toLocaleDateString()} name: ${el.guestName}`}
                                    </Box>
                                )
                            })}
                        </Box>

                    </Box>

                </Modal>

                <Box className={`${classes.earningBox} ${classes.earningBoxLeft}`} sx={{ display: 'flex', flex: '3', gap: '16px' }}>
                    <Box
                        onClick={handleOpen}
                        className={`${classes.box1} ${classes.cards} `}>
                         Today
                        <Typography sx={{ fontSize: '30px' }}>
                            {`${Math.trunc(dailyIncome) + todayIncomeFromBakery}ლ`}

                            <Typography  sx={{ fontSize: '19px' }}>
                                (-{daylyComisions | 0}ლ) - ხარჯი
                            </Typography>
                          <Typography sx={{ fontSize: '40px' }}>
                            {dailyIncome - daylyComisions | 0}ლ
                          </Typography>

                        </Typography>

                    </Box>


                    <Modal
                        open={openFut}
                        onClose={handleCloseFut}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h3> Future bookings</h3>
                            {redused?.map((el, i) => {

                                return <Box>
                                    <Box className={classes.todayBookingCard}>
                                        {`${i + 1} - price: ${Math.trunc(el.dailyInfo?.pricePerNight)} | name: ${el.guestName} | Place: ${el.place}, until: ${el.checkOut} `}
                                    </Box>
                                </Box>
                            })}
                        </Box>

                    </Modal>


                    <Box className={`${classes.box1} ${classes.cards} `}>
                        This Month Income
                        <Typography sx={{ fontSize: '40px' }}>
                            {`${Math.trunc(lastWeekIncome)}ლ`}
                            <Typography sx={{ fontSize: '20px' }}>
                                (-{monthlyComisions | 0}ლ)
                            </Typography>
                            {lastWeekIncome - monthlyComisions | 0}ლ
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className={classes.earningBox}
                    sx={{ display: 'flex', flex: '3', gap: '16px' }}

                >
                    <Box
                        onClick={handleOpenFut}
                        className={`${classes.box1} ${classes.cards} `}>
                        Future Income
                        <Typography sx={{ fontSize: '40px' }}>
                            {`${Math.trunc(futureIncome)} GEL`}
                        </Typography>
                    </Box>

                    <Box className={` ${classes.box2} ${classes.cards}`}>
                        Total Assets
                        <Typography sx={{ fontSize: '50px' }}>
                            {assets.length ? housesQty : <CircularProgress sx={{ color: 'white' }} />}
                        </Typography>

                    </Box>

                </Box>
            </Box>


            {<Box className={`${classes.box3}`} >
                <Box className={` ${classes.totalIncomeBox}`}>

                    <Box sx={{ flex: '2', fontSize: '18px' }}>Income</Box>

                    <Typography sx={{ fontSize: '130%', flex: '2' }}>
                        {totalEarnings.length ? `${totalEarningss} GEL` : <CircularProgress sx={{ color: 'white' }} />}
                    </Typography>

                </Box>
                <Box className={` ${classes.totalOutcomeBox}`}>

                    <Box sx={{ flex: '2', fontSize: '18px' }}>Outcome </Box>

                    <Typography sx={{ fontSize: '20px', flex: '2' }}>
                        {totalEarnings.length ? `${totalOutcome} GEL` : <CircularProgress sx={{ color: 'white' }} />}
                    </Typography>
                </Box>
            </Box>}


            <AddBookingForm/>
        </Box>
    )
}

export default OverviewTabs
