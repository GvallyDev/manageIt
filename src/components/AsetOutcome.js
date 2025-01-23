

import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { DataGrid } from '@mui/x-data-grid';
import { assetActions } from "../store/asset-slice";
import AddAssetOutcomeForm from './AddAssetOutcomeForm';
import { useCallback, useEffect } from 'react';



const useStyles = makeStyles({
    mainBox: {
        display: 'flex'
    },
    mainWraper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        backgroundImage: 'linear-gradient(to right, #F86666, #FA3030)',
        width: 'fit-content',
        fontSize: '2.5rem',
        padding: '0 20px 0 10px ',
        margin: '20px 0 30px 20px',
    },
    down: {
        width: '50px !important',
        height: '50px !important'
    }
})

const AsetOutcome = () => {

    const classes = useStyles()
    const assetBookings = useSelector(state => state?.assets?.assetBookings)
    const assetExpenses = useSelector(state => state?.assets?.assetExpenses)
    let sum = 0


    assetBookings.map((el) => {
        return sum = sum + Number(el.comision)
    })

    assetExpenses.map((el) => {
        return sum = sum + Number(el.cost)
    })



    const dispatch = useDispatch()
    const columns = [
        { field: 'name', headerName: 'Guest', flex: 1 },
        { field: 'costType', headerName: 'Type', flex: 1 },
        { field: 'cost', headerName: 'Cost', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
        { field: 'place', headerName: 'Place', flex: 1 },
    ];

    const outcomeData = []


    for (const i in assetBookings) {

        outcomeData.push({
            id: assetBookings[i].id,     
            place: assetBookings[i].place,
            cost: assetBookings[i].comision,
            date: assetBookings[i].checkIn,
            name: assetBookings[i].guestName,
            costType: assetBookings[i]?.guestName ? 'Booking' : 'cleaning',
        })
    }




    for (const i in assetExpenses) {
        outcomeData.push({
            id: assetExpenses[i].id,
            place: assetExpenses[i].place,
            cost: assetExpenses[i].cost,
            date: assetExpenses[i].date,
            costType: assetExpenses[i]?.type,
        })
    }



    return (
        <>
            <Box className={classes.mainBox}>
                <Box className={classes.mainWraper}>
                    <ArrowDownwardIcon className={classes.down} />
                    <box>

                        {`${sum} GEL`}
                        <Box>
                            {`${(sum / 2.50).toFixed()} $`}
                        </Box>

                    </box>
                </Box>
                <AddAssetOutcomeForm />

            </Box>

            <DataGrid
                sx={{ height: 400, width: '100%' }}
                rows={outcomeData.reverse()}
                columns={columns}
            />
        </>
    )
}








export default AsetOutcome

