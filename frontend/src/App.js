import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AddedPage from './pages/AddedPage/AddedPage';
import ShippingInfoPage from './pages/ShippingInfoPage/ShippingInfoPage';
import ConfirmPage from './pages/ConfirmPage/ConfirmPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/added", element: <AddedPage /> },
  { path: "/shippinginfo", element: <ShippingInfoPage /> },
  { path: "/confirm", element: <ConfirmPage /> },
  { path: "/details", element: <BookDetailsPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> }
];

const App = () => {
<<<<<<< Updated upstream
=======
  
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/added", element: <AddedPage /> },
    { path: "/shippinginfo", element: <ShippingInfoPage />},
    { path: "/confirm", element: <ConfirmPage/> },
    { path: "/details", element: <BookDetailsPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> }
  ];
>>>>>>> Stashed changes
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
