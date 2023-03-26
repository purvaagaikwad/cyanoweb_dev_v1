import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppError } from './components/AppError';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter basename="/cyanoweb">
  <React.StrictMode>
    <AppError>
      <App />
    </AppError>
  </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
