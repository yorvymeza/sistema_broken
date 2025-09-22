import React from 'react';

const AccountInfo = ({ balance }) => {
  const formattedBalance = `$${balance.toFixed(2)}`;
  const lastUpdated = '6:46:02 PM';

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-400 mb-2">Balance de la Cuenta</h2>
      <p className="text-5xl font-bold text-green-500 mb-1">{formattedBalance}</p>
      <p className="text-sm text-gray-500">Última actualización: {lastUpdated}</p>
    </div>
  );
};

export default AccountInfo;