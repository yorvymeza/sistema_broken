import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 shadow-lg">
      <div className="text-2xl font-bold mb-8">Menú</div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-700 transition duration-200">
              📈 Dashboard
            </Link>
          </li>
          {/* Puedes agregar más enlaces aquí, como "Configuración" o "Historial" */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;