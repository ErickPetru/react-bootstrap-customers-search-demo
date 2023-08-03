import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';

export default memo(() => (
  <>
    <MainNavbar />
    <Outlet />
  </>
));
