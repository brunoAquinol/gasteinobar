import React from 'react';

import Routes from './src/routes';
import DatabaseInit from './src/database/db-init';

export default function App() {
  new DatabaseInit;
  return (  
    <Routes />
  );
}
