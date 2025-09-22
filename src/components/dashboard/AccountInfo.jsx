import React from 'react';

function AccountInfo({ balance }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Balance de la Cuenta</h2>
      <p className="text-4xl font-bold text-green-400">${balance}</p>
      <p className="text-gray-400 mt-2">Última actualización: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default AccountInfo;