import 'popper.js';
import 'jquery/dist/jquery.min.js';

// Default
//import 'bootstrap/dist/css/bootstrap.min.css';

//Bootswatch themes
//import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';

//import 'bootswatch/dist/


import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table-next.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();