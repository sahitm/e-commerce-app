import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {ContextProvider} from '../src/Context/Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
      <Router>
        <App />
      </Router>
  </ContextProvider>
  
);

