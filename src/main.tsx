import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import DashBoard from './Dashboard.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
