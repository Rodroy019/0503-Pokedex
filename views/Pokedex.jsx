import { useNavigate } from 'react-router-dom'

const Pokedex = () => {
  const navigate = useNavigate()
  const HandleClick = () => {
    navigate('/galeria')
  }
  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={HandleClick}>Apretame</button>
    </div>
  )
}

export default Pokedex
