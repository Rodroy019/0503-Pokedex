import { PokemonChosen } from '../context/PokemonChosen'
import { useContext } from 'react'

const Pokedex = () => {
  const { pokemon } = useContext(PokemonChosen)
  console.log('estoy en pokedex')
  console.log(pokemon)
  // const navigate = useNavigate()

  // const HandleClick = () => {
  //   navigate(`/pokemones/${pokemonChoose}`)
  // }

  return (
    <div className='image-container'>
      <h1>Pokedex</h1>
      <p>Elijie uno</p>

    </div>
  )
}

export default Pokedex
