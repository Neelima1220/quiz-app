import React, { createContext, useState } from 'react';
import './style.css';
import Hello from './hello';
import { useGlobalContext } from './context';

export default function App() {
  const { sel, setSel, handleChange } = useGlobalContext();

  return (
    <div>
      <select onChange={handleChange} value={sel}>
        <option value="na">na</option>
        <option value="gi">gi</option>
        <option value="reddy">reddy</option>
      </select>
      <Hello />
    </div>
  );
}
