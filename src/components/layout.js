// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Suspense fallback={null}>
        <AppBar />
        <Outlet />
      </Suspense>
    </div>
  );
};
