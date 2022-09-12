import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/authContext';
import { ThemeContextProvider } from './context/themeContext';
import {BrowserRouter} from 'react-router-dom';
import { LogicContextProvider } from './context/logicContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider> 
    <BrowserRouter>
      <ThemeContextProvider>
        <LogicContextProvider>
          <App />
        </LogicContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
