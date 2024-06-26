import { createContext, useEffect, useState } from 'react'
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.'

export const PokemonChosen = createContext()

const PokemonChosenProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setPokemones(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PokemonChosen.Provider value={{ pokemones, setPokemones }}>
      {children}
    </PokemonChosen.Provider>
  )
}

export default PokemonChosenProvider
