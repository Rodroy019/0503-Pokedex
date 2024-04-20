import NavBar from '../src/components/NavBar'
import Rutas from '../src/routes/index'
import React from 'react'
import PokemonChosenProvider from '../src/context/PokemonChosen'

const App = () => {
  return (
    <PokemonChosenProvider>
      <div>
        <NavBar />
        <Rutas />
      </div>
    </PokemonChosenProvider>
  )
}

export default App
