import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Sistema de Trading Exnova</h1>
      <nav>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;