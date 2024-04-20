import { useParams } from 'react-router-dom'
import CardPokemon from '../components/CardPokemon'

const Pokemon = () => {
  const { name } = useParams()
  return (
    <div className='image-container'>
      <h4>Tu pokemon es: {name.toUpperCase()}</h4>
      <CardPokemon />
    </div>
  )
}

export default Pokemon
