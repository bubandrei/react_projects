import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './component/count/count';
import Modal from './component/modal/modal';
import Quiz from './component/quiz/quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Count/> */}
    {/* <Modal/> */}
    <Quiz/>
  </React.StrictMode>
);
reportWebVitals();
