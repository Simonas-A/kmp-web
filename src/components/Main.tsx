import React, { useState } from 'react'
import CarList from './cars/CarList'
import Header from './header/Header'
import './TabPanelProps.interface'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import {ROUTES} from './routes/routes'
import { Link, Route, Routes, useLocation, useNavigate  } from 'react-router-dom';
import AddListing from './addListing/AddListing';

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



const Main = () => {
    const [value, setValue] = React.useState(0);
    const [addedListing, setAddedListing] = useState([]);
    

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={window.location.pathname} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Home" value={ROUTES.HOME} to={ROUTES.HOME} component={Link} {...a11yProps(0)} />
                    <Tab label="Add a car listing" value={ROUTES.ADD_LISTING} to={ROUTES.ADD_LISTING} component={Link} {...a11yProps(1)} />
                </Tabs>
            </Box>

            <Routes>
                <Route index path={ROUTES.HOME} element={
                    <TabPanel value={value} index={0}>
                        <h1>{addedListing}</h1>
                        <CarList newCar={addedListing}/>
                    </TabPanel>
                } />
                <Route index path={ROUTES.ADD_LISTING} element={
                    <TabPanel value={value} index={1}>
                        <AddListing listing={setAddedListing}/>
                    </TabPanel>
                } />
            </Routes>
        </Box>        
    </>
  )
}

export default Main