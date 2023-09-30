import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/Global.css'
import './App.css'
import { Curtains } from "react-curtains";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <App />
    </Curtains>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
