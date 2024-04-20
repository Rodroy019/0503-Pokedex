import { useNavigate } from 'react-router-dom'

const Pokedex = ({ pokemon }) => {
  console.log(pokemon)
  const navigate = useNavigate()

  const HandleClick = () => {
    navigate(`/pokemones/${pokemon}`)
  }

  return (
    <div className='image-container'>
      <h1>Pokedex</h1>
      <p>Elijie uno</p>
      <select>
        <option>{pokemon}</option>
      </select>
      <button onClick={HandleClick}>Apretame</button>
    </div>
  )
}

export default Pokedex
