import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const CardPokemon = (props) => {
  return (
    <div className='image-container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
        <Card.Body>
          <Card.Title>Nombre: {props.name} </Card.Title>
          <Card.Text>
            Descripcion: de {props.name}.
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>Tipo: {props.name}</ListGroup.Item>
          <ListGroup.Item>Estadisticas: {props.name}</ListGroup.Item>
        </ListGroup>
      </Card>

    </div>
  )
}

export default CardPokemon
