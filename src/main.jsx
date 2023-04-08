import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import router from './router'
import './index.css'

register()
const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
