import React from 'react';

const Input = ({ label, type, value, onChange, placeholder, className = '' }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent 
          focus:border-blue-500 focus:ring-blue-500
          ${className}
        `}
      />
    </div>
  );
};

export default Input;