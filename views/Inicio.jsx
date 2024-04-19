import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <>
      <div className='container px-4 px-lg-5'>
        <div className='row align-items-center justify-content-center text-center'>
          <div className='col-lg-8 align-self-end'>
            <h1 className='text-black mt-5'>¡Bienvenido Maestro Pokemon!</h1>
            <hr className='divider' />
          </div>
          <div className='col-lg-8'>
            <div className='image-container'>
              <img src='../src/assets/images/iniciales.png' alt='Pokeball' className='img-inicio' />
            </div>
            <Link className='btn btn-warning btn-xl' to='./galeria'>¡Atrapalos Ya!</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio
