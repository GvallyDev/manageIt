import { Box } from '@mui/material';
import { el } from 'date-fns/locale';
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@mui/styles"
import './BakeryDetiles.css'
import BakeryOutcome from './BakeryOutcome';
import { useParams } from 'react-router-dom';
import { assetActions } from '../store/asset-slice';
const useStyles = makeStyles({
    titel: {
        padding:'2px 5px 2px 5px',
        textAlign:'center',
        background:'#ffffff',
        display:'flex',
        width:'70%',
        justifyContent:'space-between',
        marginBottom:'20px'
    
    },

    items: {
        padding:'2px 5px 2px 5px',
    width:'70%',
    display:'flex',
    justifyContent:'space-between'   
    },
    evenColor:{
        background:'#f2f2f2',
    }

  })


function BakeryDetiles() {
   const dispatch = useDispatch()
    const classes = useStyles();
    const {assetId} = useParams();
    const assets = useSelector(state => state.assets.assets)

    const curentBakeryData = assets?.filter(el => el.id === assetId)
    
    const [bakeryData] = curentBakeryData


    const { sellings } = bakeryData || {}

    let sellingsArr = []

    for (let key in sellings) {

        sellingsArr.push({
            id: key,
            soldToday: Number(sellings[key]?.soldToday),
            addedToStock: Number(sellings[key]?.addedToStock),
            date: sellings[key]?.date,
            incomePerBag: sellings[key]?.incomePerBag,
            profit: sellings[key]?.profit,
        })
    }

    
dispatch( assetActions.replaceCurentBakerySalse({ 
    bakerySales:sellingsArr
})
)
   

       let totalBougthBags = 0
       let totalBagsSold = 0
       let totalIncome  = 0
       let starterr = 0
       
    return (
        <Box>


<table>  
    <tr>  
        <th>Date</th>  
        <th>In Stock</th>  
        <th>Added</th>  
        <th>Sold</th>  
        <th>Income</th> 
    </tr>  
 

    {
       sellingsArr.map((el, i)=>{
        totalBougthBags += el.addedToStock
        totalBagsSold+= el.soldToday
        totalIncome += (el.soldToday * el.incomePerBag)
         starterr = starterr + Number(el.addedToStock) - Number(el.soldToday) 
           return(
               <>
            <tr key={i}>
            <td>{new Date(el.date).toLocaleDateString()}</td>
            <td>{starterr}</td>
            <td>{el.addedToStock}</td>
            <td>{el.soldToday}</td>
            <td>{el.soldToday * el.incomePerBag}</td>
        </tr>
        
    {i === sellingsArr.length - 1 && 
    
    <tr style={{background:'#75bd75'}} >
    <td>total</td>
    <td>{starterr}</td>
    <td>{totalBougthBags}</td>
    <td>{totalBagsSold}</td>
    <td>{totalIncome}</td>
</tr>}
</>
           )
       })}


</table>  

     


<BakeryOutcome 
totalBougthBags={totalBougthBags}
totalBagsSold={totalBagsSold}
totalIncome={totalIncome}
starterr={starterr}
/>

        </Box>
    )
}

export default BakeryDetiles



    // const totalIncome = useMemo(() => {
    //     const { sellings  } = bakeryData || {}

    //     let sellingsArr = []

    //     for (let key in sellings) {
    //         sellingsArr.push({
    //             id: key,
    //             soldToday: Number(sellings[key]?.soldToday),
    //             addedToStock: Number(sellings[key]?.addedToStock),
    //             date: sellings[key]?.date,
    //             leftInStock: sellings[key]?.inStock,
    //             incomePerBag: sellings[key]?.incomePerBag,
    //             profit: sellings[key]?.profit,
    //         })
    //     }


    //     let totalIncome = 0
   
    //     sellingsArr.forEach((el)=>{
    //         totalIncome += el?.soldToday * el?.incomePerBag    

    //     })

    //     return totalIncome
    // }, [assets])

