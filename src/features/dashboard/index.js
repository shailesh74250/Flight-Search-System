import React, { useContext } from 'react';
import CurrencyContext from '../../globalStorage/context';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import ShowCurrency from './showCurrency';

import './style/dashboard.scss';

function Dashboard() {
  const { state, dispatch } = useContext(CurrencyContext);
  console.log(state);
  return (
    <div class="grid">
      <header className="header">
        <Navbar />
      </header>
      <aside className="sidenav">
        <Sidebar />
      </aside>
      <main className="main">
        <ShowCurrency />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;
