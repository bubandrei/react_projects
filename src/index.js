import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './component/count/count';
import Modal from './component/modal/modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Count/> */}
    <Modal/>
  </React.StrictMode>
);
reportWebVitals();
