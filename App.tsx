import * as React from 'react';
import './style.css';

export default function App() {
  const [sel, setSel] = React.useState('na');
  const handleChange = (e) => {
    console.log(e.target.value);
    setSel(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange} value={sel}>
        <option value="na">na</option>
        <option value="gi">gi</option>
        <option value="reddy">reddy</option>
      </select>
      {sel}
    </div>
  );
}
