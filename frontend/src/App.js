// App.js
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AddedPage from './pages/AddedPage/AddedPage';
import ShippingInfoPage from './pages/ShippingInfoPage/ShippingInfoPage';
import ConfirmPage from './pages/ConfirmPage/ConfirmPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/added" element={<AddedPage/>} />
        <Route path="/shippinginfo" element={<ShippingInfoPage/>} />
        <Route path="/confirm" element={<ConfirmPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
