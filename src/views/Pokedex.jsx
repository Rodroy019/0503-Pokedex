import React, { useContext, useState } from 'react'
import { PokemonChosen } from '../context/PokemonChosen'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Pokedex = () => {
  const { pokemones } = useContext(PokemonChosen)
  const [pokemon, setPokemon] = useState('')
  const navigate = useNavigate()

  const HandleClick = () => {
    if (pokemon.trim() === '') return
    navigate(`/pokemon/${pokemon}`)
  }

  return (
    <div className='image-container'>
      <h3>Selecciona un Pokémon</h3>
      <select id='pokemonSelect' onChange={(e) => setPokemon(e.target.value)}>
        <option value=''>Selecciona un Pokémon</option>
        {pokemones.map(poke => (
          <option key={poke.name} value={poke.name}>
            {poke.name.toUpperCase()}
          </option>
        ))}
      </select>
      <Button variant='danger' onClick={HandleClick}>¡Atrapalo YA!</Button>
    </div>
  )
}

export default Pokedex
