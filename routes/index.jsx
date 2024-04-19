import { Routes, Route } from 'react-router-dom'
import { Pokedex, Inicio, NotFound, Galeria } from '../views'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Rutas
