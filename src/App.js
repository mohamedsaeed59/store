import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/login/Login';
import { useAuth } from './context/GlobalState';
import { useEffect } from 'react';
import {auth} from "./firebase";
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Payment from './components/payment/Payment';

function App() {
  const {dispatch} = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({type: "SET_USER", user: authUser});
      }else{
        dispatch({type: "SET_USER", user: null});
      }
    })
  },[]);
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
           <Header />
           <Home />
          </>
         }/>
        <Route path='/checkout' element={
          <>
           <Header />
           <Checkout />
          </>
         }/>
        <Route path='/payment' element={
          <>
            <Header />
            <Payment />
          </>
         }/>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;