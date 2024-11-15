import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const h1Element = React.createElement(
  'li',
  null,
  'Ha Noi',
)
const h2Element = React.createElement(
  'li',
  null,
  'Da Nang',
)
const h3Element = React.createElement(
  'li',
  null,
  'Lao Cai',
)
const bigElement = React.createElement(
  'ul',
  null,
  "Danh sách thuộc trung ương",
  h1Element,
  h2Element,
  h3Element,
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  bigElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
