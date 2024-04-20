import { createContext, useEffect, useState } from 'react'
const PHOTO_URL = '/photos.json'

export const PokemonChosen = createContext()

const PokemonChosenProvider = ({ children }) => {
  const [images, setImages] = useState([])
  const getData = async () => {
    const response = await fetch(PHOTO_URL)
    const data = await response.json()
    setImages(data.photos)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PokemonChosen.Provider value={{ images, setImages }}>
      {children}
    </PokemonChosen.Provider>

  )
}

export default PokemonChosenProvider
