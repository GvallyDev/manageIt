import React from 'react'
import AddAssetTab from '../components/AddAssetTab'
import AssetTab from '../components/AssetTab'

const AssetsPage = () => {
    return (
        <>
          AssetsPage
        <div style={{display:'flex', justifyContent:'space-around',flexDirection:'column',margin:"16px 0 90px 0"}}>
          
            <AssetTab/>
            <AddAssetTab/>
          
        </div>
        </>
    )
}

export default AssetsPage
