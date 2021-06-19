import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import profile from "./redux/profile";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={profile}>
    <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


