//Dependencias
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Routes
import AppRoutes from './Routes';

//Assets
import './index.css';

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);