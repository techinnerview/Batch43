import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductComponent from './productComponent';
import BillComponent from './billComponent';
import OrderComponent from './orderComponent';
import PageNotFoundComponent from './pageNotFoundComponent';
import ReactFormsComponent from './reactFormsComponent';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route path="/order" element={<OrderComponent />} />
          <Route path="/bill" element={<BillComponent />} />
          <Route path="/forms" element={<ReactFormsComponent />} />
          <Route path ="*" element={<PageNotFoundComponent />} />
        </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
