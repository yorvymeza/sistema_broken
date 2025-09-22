import React from 'react';
import AccountInfo from '../components/dashboard/AccountInfo';
import TradingForm from '../components/dashboard/TradingForm';
import OrderHistory from '../components/dashboard/OrderHistory';

function DashboardPage() {
  // Simula datos de la API
  const accountBalance = 2500.75;
  const recentOrders = [
    { id: 1, type: 'Buy', asset: 'BTC/USD', amount: 50, result: 'Profit' },
    { id: 2, type: 'Sell', asset: 'ETH/USD', amount: 30, result: 'Loss' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">Dashboard de Trading 📈</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AccountInfo balance={accountBalance} />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <TradingForm />
          <OrderHistory orders={recentOrders} />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;