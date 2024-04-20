import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {
  const [pokemon, setPokemon] = useState('')
  const navigate = useNavigate()

  const HandleClick = () => {
    if (pokemon.trim() === '') return
    navigate(`/pokemon/${pokemon}`)
  }
  return (
    <div className='image-container'>
      <h1>Pokedex</h1>
      <p>Elijie uno</p>
      <input type='text' value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
      <button onClick={HandleClick}>Apretame</button>
    </div>
  )
}

export default Pokedex
