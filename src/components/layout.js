// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      Layout
      <Suspense fallback={null}>
        <AppBar />
        <Outlet />
      </Suspense>
    </div>
  );
};
