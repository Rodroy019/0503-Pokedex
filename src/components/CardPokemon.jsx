import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router-dom'

const CardPokemon = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()

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

    getPokemon()
  }, [name])

  return (
    <div className='image-container'>
      {pokemon && (
        <Card style={{ width: '50rem' }}>
          <div className='row'>
            <div className='col-6'>
              <Card.Img
                variant='top'
                src={pokemon.img}
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
            <div className='col-6'>
              <Card.Body>
                <Card.Title className='text-capitalize'>Nombre: {name}</Card.Title>
                <Card.Text>
                  Posición en Pokédex: <span>{pokemon.id}</span>
                </Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>
                  Tipo:
                  <ul>
                    {pokemon.types.map((type) => (
                      <li key={type} className='text-capitalize'>{type}</li>
                    ))}
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item>
                  Habilidades:
                  <ul>
                    {pokemon.abilities.map((ability) => (
                      <li key={ability} className='text-capitalize'>{ability}</li>
                    ))}
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Card>

      )}
      {!pokemon && <div>Cargando información del Pokémon...</div>}
    </div>
  )
}

export default CardPokemon
