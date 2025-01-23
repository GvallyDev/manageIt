import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const useStyles = makeStyles({
    mainBoxWrapper: {
        background: '#383838',
        color: 'white',
        borderRadius: '8px',
  
        padding: '10px 16px',
      
        textAlign: 'center',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap:'12px',
        justifyContent:"space-between"
    },
    mainBoxWrapperTone: {
        background: '#34ebae',
        borderRadius: '8px',

        padding: '10px 16px',
      
        fontSize: '50px',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center'

    },
    itembox: {
        marginTop:"16px",
      display:'flex',
      flexDirection:'column',
      gap:'10px',
      padding: '24px 16px 24px 16px'

    }
})

const AssetTab = () => {

    const [asetId, setAsetId] = useState()

    const classes = useStyles()
    const navigate = useNavigate();

    const assets = useSelector(state => state.assets.assets)


    const openDetilePage = (event) => {
        setAsetId(event.target.id)
        navigate(`/asset/${event.target.id}`)

    }


    const openDetilePageTone = (event) => {
        setAsetId(event.target.id)
        navigate(`/asset/${event.target.id}`)
    }

    return (

            <div className={classes.itembox}>

                {assets.map((aset, i) => {
                    // if (aset.assetType === 'bakery') {
                    //     return (
                    //         <Box key={i} onClick={openDetilePageTone} id={aset.id} className={classes.mainBoxWrapperTone}>
                            
                    //             <Box id={aset.id}>
                    //                 <Typography sx={{ fontSize: '16px' }} id={aset.id}>
                    //                     {aset.title}
                    //                 </Typography>
                    //             </Box>
                    //         </Box>

                    //     )
                    // }
                    return (
                        <Box key={i} onClick={openDetilePage} id={aset.id} className={classes.mainBoxWrapper}>
                            <div style={{display:"flex", gap:'12px', alignItems:"center"}}>
                            {aset.avatarImg && (
                                <img src={aset.avatarImg} style={{height:"40px", width:"40px",  borderRadius:"50%"}}/>
                            )}

                            <Box id={aset.id}>
                                <Typography sx={{ fontSize: '16px' }} id={aset.id}>
                                    {aset.title}
                                </Typography>
                            </Box>
                            </div>

                                {">"}

                        </Box>

                    )
                })}

            </div>

       
    )
}

export default AssetTab
