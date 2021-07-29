import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import Admin from './components/Admin';

ReactDOM.render(
  <BrowserRouter>
  <App />
   
  </BrowserRouter>
   
     ,
  document.getElementById('root')
);


