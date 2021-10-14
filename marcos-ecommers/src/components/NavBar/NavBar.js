
import { CartWidget } from './CartWidget'



export const NavBar = () => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Tienda de Marcos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Articulos</a>
              <a className="nav-link" href="#">Precios</a>
              <a className="nav-link disabled">Ofertas</a>
              
              <CartWidget/>

            </div>
          </div>
        </div>
      </nav>
    )
} 