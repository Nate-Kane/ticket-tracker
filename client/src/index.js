import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';


       //////////////         Now, I did yarn add axios react-router-dom    to add those two packages, but I didn't add semantic
       /////////////        ui-react and semantic-ui-css because maybe I will use a different styling library. Seach onlin how to
       //////////////       to add these if you desire. This way your app size is a little smaller, and that way there's not as 
       ////////////         much data and code and files to download, to process, to have lyring around--especially if not used.

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
