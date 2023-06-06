import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <nav id='botonera'  className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h1>Ind FC</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon colorBtn" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                Camisetas
                            </li>
                            <li className="nav-item active">
                                Camperas
                            </li>
                            <li className="nav-item">
                                Buzos
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>

        </header>

    )
}

export default NavBar