import React from 'react';
import StartingPage from './components/StartingPage/Starting';
import CorePage from './components/Corepage/Core';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <StartingPage></StartingPage> 
      <CorePage></CorePage>
    </div>
  );
}

export default App;
