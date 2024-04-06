import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import AuthProvider from './Auth/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <HelmetProvider>
        <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </HelmetProvider>
  </React.StrictMode>,
)
