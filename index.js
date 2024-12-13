import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { makeServer } from './server';

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
