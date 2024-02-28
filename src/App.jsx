import React from 'react';
import './style.css';
import Home from './Home';

//data pass from parent to child without props

export default function App() {
  return (
    <div>
      <Home name="abc" id={1} />
      <h1>Parent Component</h1>
    </div>
  );
}
