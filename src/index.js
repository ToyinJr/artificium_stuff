import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Register from './Register.js'
import Access from './Access.js'
import Access2 from './Access2.js';
import Welcome from './Welcome';
import 'flowbite-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='full'>
    <BrowserRouter>
      <Routes>
        <Route index  element={<Login />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/register' element={<Register />} />
        <Route path='/access' element={<Access />} />
        <Route path='/access2' element={<Access2 />} />
        <Route path='/welcome' element={<Welcome />} />

      </Routes>
      </BrowserRouter>

    
  </div>

  


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
