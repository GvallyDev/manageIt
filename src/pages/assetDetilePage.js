import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typography } from "@mui/material";
import AssetInfoNavigation from "../components/AssetInfoNavigation";
import { assetActions } from "../store/asset-slice";
import { useState } from "react";

const AssetDetilePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { assetId } = useParams();
    const assets = useSelector(state => state.assets.assets)

    const currentAsset = assets?.filter((el) => (el.id === assetId))
    const loadedBookings = [];
    const loadedExpenses = [];

    const [assetType, setAssetType] = useState('')


    for (const key in currentAsset[0]?.bookings) {

        loadedBookings.push({
            id: key,
            guestName: currentAsset[0]?.bookings[key].guesName,
            comision: currentAsset[0]?.bookings[key].comisions,
            reservationPrice: `${currentAsset[0]?.bookings[key].reservationPrice}ლ`,
            checkIn: new Date(currentAsset[0]?.bookings[key].checkIn).toLocaleDateString(),
            checkOut: new Date(currentAsset[0]?.bookings[key].checkOut).toLocaleDateString(),
            place: currentAsset[0].title,
            daylyInfo: currentAsset[0]?.bookings[key].daylyInfo,

        })

    }

    for (const key in currentAsset[0]?.expenses) {

        loadedExpenses.push({
            id: key,
            cost: currentAsset[0]?.expenses[key]?.cost,
            type: currentAsset[0]?.expenses[key]?.type,
            date: currentAsset[0]?.expenses[key]?.date,
            place: currentAsset[0].title
        })

    }

    dispatch(assetActions.replaceAssetBooking({

        assetBookings: loadedBookings
    })
    )

    dispatch(assetActions.replaceAssetExpenses({
        assetExpenses: loadedExpenses
    })
    )


    const content = () => {
        return (
            assets.map((aset, i) => {
                return (

                    aset?.id === assetId &&
                    <Typography key={i}>{`${aset.title}- ${aset.assetType}`}</Typography>
                )
            }))
    }


    return (
        <div>
            <ArrowBackIosIcon style={{ margin: '22px 0 0 16px' }} onClick={() => navigate(-1)} />

            <Typography>

                {content()}
            </Typography>
            { }
            <AssetInfoNavigation assetType={
                assets.filter((aset) => {
                    let type = ''
                    if (aset?.id === assetId) {
                        type = aset.assetType
                        return type

                    }
                })

            }


            />
        </div>
    )
}

export default AssetDetilePage
