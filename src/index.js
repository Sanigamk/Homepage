import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landmess from './Landmess';
import Sendms from './Sendms';
import Register from './Register';
import { Login } from './Login';
import Messhome from './Messhome';
import Received from './Received';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         {/* <Route path='/' element={<Landmess/>}>
           <Route path='register' element={<Register/>}/>
           <Route path='login' element={<Login/>}/>
         </Route> */}
         <Route path='/' element={<Messhome/>}>
           <Route path='sendmes' element={<Sendms/>}/>
           <Route path='received' element={<Received/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
