import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import DNDContainer from './components/DNDContainer';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import router from './router'
import './index.css'

register()
const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </React.StrictMode>,
)
