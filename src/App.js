
import { useEffect } from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import { useDispatch } from 'react-redux';
import { fetchAssetData } from './store/fetchAssetData-http-action';

import { Route, Routes } from 'react-router-dom';
import AssetsPage from './pages/AssetsPage';
import Dashboard from './pages/Dashboard';
import BookingsPage from './pages/BookingsPage';
import IncomePage from './pages/IncomePage';
import OutComePage from './pages/OutComePage';
import BanksPage from './pages/BanksPage';
import AssetDetilePage from './pages/assetDetilePage';
import SignUp from './Autentication /SignUp';
import SignIn from './Autentication /SignIn';

function App(props) {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAssetData())
  
}, [dispatch])
  
  return (
    <>
    <SideMenu className="App">
      <Routes>
      <Route path='*' element={<Dashboard/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      <Route path='register' element={<SignUp/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='assets' element={<AssetsPage/>}/>
      <Route path='bookings' element={<BookingsPage/>} />
      <Route path='income' element={<IncomePage/>}/>
      <Route path='outcome' element={<OutComePage/>} />
      <Route path='bankloans' element={<BanksPage/>} />
      <Route path='asset/:assetId' element={<AssetDetilePage/>} />
      </Routes> 
    </SideMenu>

    </>
  );
}

export default App;
