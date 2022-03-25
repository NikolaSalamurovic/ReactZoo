import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return(
    <div className='backGround'>
      <p className='frontTitle'>Välkommen till detta React-Zoo</p>
      <p className='frontInfo'>Klicka gärna på ZooList för att komma vidare till en lista med våra djur.</p>
    </div>
  )
}

export default App;
