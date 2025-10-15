import PaginaAsistencias from './pages/PaginaAsistencias'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrarAsistencia from './pages/RegistrarAsistencia'

function App() {
  return (
    <>
      <PaginaAsistencias/>
      <RegistrarAsistencia/>
    </>
  )
}

export default App
