import React, { useContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import Routes from './routes';
import CurrencyContext from './globalStorage/context';
import currencyReducer from './globalStorage/reducer';

function App() {
  const initialState = useContext(CurrencyContext);
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  return (
    <CurrencyContext.Provider value={{ state, dispatch }}>
      <Routes />
    </CurrencyContext.Provider>
  );
}

export default App;
