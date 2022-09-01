
import { useEffect } from 'react'
import './App.css';
import SideMenu from './components/SideMenu';
import { useDispatch, useSelector } from 'react-redux'
import {fetchAssetData} from './store/fetchAssetData-http-action'

import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom'
import AssetsPage from './pages/AssetsPage';
import Dashboard from './pages/Dashboard';
import BookingsPage from './pages/BookingsPage';
import IncomePage from './pages/IncomePage';
import OutComePage from './pages/OutComePage';
import BanksPage from './pages/BanksPage';

function App() {
  const dispatch = useDispatch()


    dispatch(fetchAssetData())




  return (
    <SideMenu className="App">
      <Routes>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='assets' element={<AssetsPage/>}/>
      <Route path='bookings' element={<BookingsPage/>} />
      <Route path='income' element={<IncomePage/>}/>
      <Route path='outcome' element={<OutComePage/>} />
      <Route path='bankloans' element={<BanksPage/>} />
      </Routes> 
    </SideMenu>
  );
}

export default App;
