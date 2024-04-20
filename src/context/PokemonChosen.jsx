import { createContext, useEffect, useState } from 'react'
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0.'

export const PokemonChosen = createContext()

const PokemonChosenProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState([])

  const getData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log('estoy en context')
    console.log(data.results)
    setPokemon(data.results)
    console.log(pokemon)
  }

  useEffect(() => {
    getData()
  }, [])

  const global = {
    pokemon, setPokemon, name, setName
  }

  return (
    <PokemonChosen.Provider value={{ global }}>
      {children}
    </PokemonChosen.Provider>

  )
}

export default PokemonChosenProvider
