import React from 'react';
import {Outlet} from 'react-router-dom';
import Home from '../routes/Home';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

export default function Root() {
  return (
    <h1>
      i'm root
      <Outlet />
      <ReactQueryDevtools />
    </h1>
  );
}
