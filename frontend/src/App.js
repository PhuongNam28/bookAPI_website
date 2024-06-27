import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AddedPage from './pages/AddedPage/AddedPage';
import ShippingInfoPage from './pages/ShippingInfoPage/ShippingInfoPage';
import ConfirmPage from './pages/ConfirmPage/ConfirmPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import { userSelector } from './Redux/selector';
import { useSelector } from 'react-redux';





const App = () => {
  const currentUser = useSelector(userSelector);
  console.log(currentUser)
  const RequiredAuth = ({children}) =>{
    return currentUser ? children : <Navigate to = "/login"/>
  }
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/added", element: <AddedPage /> },
    { path: "/shippinginfo", element: <RequiredAuth><ShippingInfoPage /></RequiredAuth>},
    { path: "/confirm", element: <RequiredAuth><ConfirmPage/></RequiredAuth> },
    { path: "/details", element: <BookDetailsPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> }
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
