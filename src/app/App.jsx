import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContextProvider } from '../contexts/ToastContext';
import MainLayout from '../layouts/MainLayout';
import CustomerDetails from '../pages/CustomerDetails';
import NotFound from '../pages/NotFound';
import SearchCustomer from '../pages/SearchCustomer';
import './App.css';

export default memo(() => (
  <ToastContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<SearchCustomer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/customerInfo" element={<MainLayout />}>
          <Route index element={<CustomerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ToastContextProvider>
));
