import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrintZoo } from './components/printZoo';
import { AnimalPage } from './components/animalPage';
import { Layout } from './components/Layout';
import { NotFound } from './components/notfound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App/>}/>
          <Route path='/zoo' element={<PrintZoo/>}/>
          <Route path='/zoo/:id' element={<AnimalPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
