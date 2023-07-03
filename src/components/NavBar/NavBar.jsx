import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav id='botonera' className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <Link className='navLink' to={"/"}> 
                        <h1>Ind FC</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon colorBtn" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={`/categoria/camisetas`} className='navLink'> Camisetas </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/categoria/camperas`} className='navLink'> Camperas </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>

        </header>

    )
}

export default NavBar