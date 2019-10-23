import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/main.scss';
import App from './views/app/App';


const routing = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
