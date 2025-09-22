import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook de navegación
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa el hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación real
    console.log('Datos del formulario:', { email, password });
    
    // Suponemos que la autenticación fue exitosa y navegamos al dashboard
    navigate('/dashboard'); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Sistema</h1>
        <p className="login-subtitle">Introduce tus credenciales para acceder al broker</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;