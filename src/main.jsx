import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline
import router from './router'
import './index.css'

register()
const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider options={HTML5toTouch}>
      <RouterProvider router={router} />
    </DndProvider>
  </React.StrictMode>,
)
