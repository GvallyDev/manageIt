import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AssetInfo from './AssetInfo';
import AssetBookings from './AssetBookings';
import AssetIncome from './AssetIncome';
import AsetOutcome from './AsetOutcome';
import BakeryHomePage from './BakeryHomePage'
import './AssetInfo.scss'

const AssetInfoNavigation = ( assetType) => {
  const [value, setValue] = useState('1')



const assetCategory = assetType?.assetType[0]?.assetType
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  if(assetCategory === 'bakery'){
return(
     
    <BakeryHomePage/>
)}
    
    
       
  return (

    <Box sx={{ width: '100%', typography: 'body1',  }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow:'auto'}}>
          <TabList onChange={handleChange} sx={{overflow:"scroll"}}>
            <Tab label="Bookings" value="1" />
            <Tab label="Incomes" value="2" />
            <Tab label="Outcomes" value="3" />
            <Tab label="Images" value="4" />
            {/* <Tab label="Notes" value="5" /> */}
            {/* <Tab label="Banks and morgage" value="6" /> */}

          </TabList>
        </Box>
        <TabPanel sx={{ padding: 0 }} value="1"><AssetBookings /></TabPanel>
        <TabPanel sx={{ padding: 0 }} value="2"><AssetIncome /></TabPanel>
        <TabPanel sx={{ padding: 0 }} value="3"><AsetOutcome /></TabPanel>
        <TabPanel sx={{ padding: 0 }} value="4"><AssetInfo /></TabPanel>
        <TabPanel sx={{ padding: 0 }} value="5">Item Two</TabPanel>
        <TabPanel sx={{ padding: 0 }} value="6">Item Three</TabPanel>
        <TabPanel sx={{ padding: 0 }} value="7"></TabPanel>
        <TabPanel sx={{ padding: 0 }} value="8">Item Two</TabPanel>

      </TabContext>
    </Box>
  );
}

export default AssetInfoNavigation
