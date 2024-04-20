import { Routes, Route } from 'react-router-dom'
import { Pokedex, Inicio, NotFound, Pokemon } from '../views'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Rutas
