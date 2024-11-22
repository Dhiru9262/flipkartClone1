import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import Home from './Components/Home/Home';
import { Box, styled } from '@mui/material';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailView from './Components/Detail/DetailView';
import Cart from './Components/cart/cart';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Header />
      <Box style={{marginTop:60}}>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<DetailView />} />
      <Route path='/cart' element={<Cart />} />
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
