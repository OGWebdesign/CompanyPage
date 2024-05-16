import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';



const Start = React.lazy(() => import('./Pages/Start'));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Start} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
