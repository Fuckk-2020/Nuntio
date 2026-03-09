import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Quítale el .jsx aquí, Vite lo encuentra solo
import './index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}