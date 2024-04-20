import React, { useContext } from 'react'
import { PokemonChosen } from '../context/PokemonChosen'
import Button from 'react-bootstrap/Button'

const Pokedex = () => {
  const { pokemones } = useContext(PokemonChosen)

  const handleSelect = (e) => {
    const selectedPokemonName = e.target.value
    console.log('Pokemon seleccionado:', selectedPokemonName)
  }

  return (
    <div className='image-container'>
      <h3>Selecciona un Pokémon</h3>
      <select id='pokemonSelect' onChange={handleSelect}>
        <option value=''>Selecciona un Pokémon</option>
        {pokemones.map(poke => (
          <option key={poke.name} value={poke.name}>
            {poke.name.toUpperCase()}
          </option>
        ))}
      </select>
      <Button variant='danger'>¡Atrapalo YA!</Button>
    </div>
  )
}

export default Pokedex
