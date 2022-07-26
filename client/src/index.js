import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // <== IMPORT
import { AuthProviderWrapper } from "./context/auth.context"; // <== IMPORT
import 'mapbox-gl/dist/mapbox-gl.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>      {/*  <== ADD  */}
        <App />
      </AuthProviderWrapper>     {/*  <== ADD  */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
