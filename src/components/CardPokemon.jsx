import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router-dom'

const CardPokemon = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState('')

  const getPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()
      console.log(data)
      const idPokemon = data.id
      const imgPokemon = data.sprites.other['official-artwork'].front_default
      const abilitiesPokemon = data.abilities.map((item) => item.ability.name)
      const typePokemon = data.types.map((tipo) => tipo.type.name)

      const pokemonInfo = {
        id: idPokemon,
        img: imgPokemon,
        abilities: abilitiesPokemon,
        types: typePokemon
      }
      setPokemon(pokemonInfo)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [name])

  return (
    <div className='image-container'>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant='top' src={pokemon.img} />
        <Card.Body>
          <Card.Title>Nombre: {name.toUpperCase()} </Card.Title>
          <Card.Text>
            Posicion en Pokedex <span>{pokemon.id}</span>.
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>Tipo: {pokemon.types}</ListGroup.Item>
          <ListGroup.Item>Habilidades: {pokemon.abilities}</ListGroup.Item>
        </ListGroup>
      </Card>

    </div>
  )
}

export default CardPokemon
