import React, { useState } from 'react';

function TradingForm() {
  const [asset, setAsset] = useState('BTC/USD');
  const [amount, setAmount] = useState(10);
  const [signal, setSignal] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleStartTrading = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar la configuración al backend para que inicie las operaciones
    console.log('Iniciando trading con la siguiente configuración:', { asset, amount, signal, schedule });
    alert('¡Configuración guardada! El sistema comenzará a operar automáticamente.');
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Configurar Trading Automatizado</h2>
      <form onSubmit={handleStartTrading}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Activo a Operar</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
          >
            <option value="BTC/USD">Bitcoin (BTC/USD)</option>
            <option value="ETH/USD">Ethereum (ETH/USD)</option>
            <option value="EUR/USD">Euro (EUR/USD)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Monto por Operación ($)</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Señal de Trading (ej. RSI > 70)</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={signal}
            onChange={(e) => setSignal(e.target.value)}
            placeholder="Estrategia de entrada/salida"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">Programación Horaria (Opcional)</label>
          <input
            type="datetime-local"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition duration-200"
        >
          Iniciar Trading
        </button>
      </form>
    </div>
  );
}

export default TradingForm;