import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='image-container'>
        <img src='http://www.i2softbd.com/template/TPL-11012/images/404-Page-Not-Found.png' alt='Imagen de Ruta no Encontrada' className='image-404' />
        <Link className='btn btn-danger' to='./'>¡Back to Home!</Link>
      </div>

    </>
  )
}

export default NotFound
