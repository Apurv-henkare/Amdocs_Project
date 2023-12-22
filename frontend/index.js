import React from 'react';
import ReactDom from 'react-dom/client'; 

import { BrowserRouter } from 'react-router-dom';
import './styles/stylesheet.css' 
import './styles/NewAccountStyle.css'

import './styles/LearnStyle.css' 
import './styles/Level.css'

import App from './App';
import reportWebVitals from './reportWebVitals';


const rootElement = ReactDom.createRoot(document.getElementById('root'));
rootElement.render(<BrowserRouter><App /></BrowserRouter>);


