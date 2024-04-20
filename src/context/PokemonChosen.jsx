import { createContext, useEffect, useState } from 'react'
const URL = 'https://pokeapi.co/api/v2/pokemon'

export const PokemonChosen = createContext()

const PokemonChosenProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])
  const getData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setPokemon(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PokemonChosen.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonChosen.Provider>

  )
}

export default PokemonChosenProvider
