import React from 'react';

function OrderHistory({ orders }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Historial de Operaciones</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="px-4 py-2 font-medium text-gray-300">Tipo</th>
              <th className="px-4 py-2 font-medium text-gray-300">Activo</th>
              <th className="px-4 py-2 font-medium text-gray-300">Monto</th>
              <th className="px-4 py-2 font-medium text-gray-300">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700">
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      order.type === 'Buy' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {order.type}
                  </span>
                </td>
                <td className="px-4 py-2">{order.asset}</td>
                <td className="px-4 py-2">${order.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`font-semibold ${
                      order.result === 'Profit' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {order.result}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;