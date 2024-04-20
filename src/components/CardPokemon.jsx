import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const CardPokemon = () => {
  return (
    <div className='image-container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
        <Card.Body>
          <Card.Title>Nombre: </Card.Title>
          <Card.Text>
            Descripcion: de .
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>Tipo: </ListGroup.Item>
          <ListGroup.Item>Estadisticas: </ListGroup.Item>
        </ListGroup>
      </Card>

    </div>
  )
}

export default CardPokemon