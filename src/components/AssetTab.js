import { Padding } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    mainBoxWrapper: {
        border: 'solid 2px black',
        borderRadius:'12px',
        width:'fit-content',
        padding:'12px'
    }
})

const AssetTab = () => {

    const classes = useStyles()
    return (
        <>
            <Box className={classes.mainBoxWrapper}>
                <Box>
                    <Typography>
                        title
    </Typography>
                </Box>
                <Box>
                    image
</Box>
moreinfo
</Box>

        </>
    )
}

export default AssetTab
