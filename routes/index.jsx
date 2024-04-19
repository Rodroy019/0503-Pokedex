import { Routes, Route } from 'react-router-dom'
import { Galeria, Inicio, NotFound } from '../views'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Rutas
