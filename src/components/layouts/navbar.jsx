import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="hero is-primary is-medium navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link to='/' href="#">
                        <a className="navbar-item">
                            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                        </a>
                    </Link>
                    <span className="navbar-burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active">
                            Inicio
                        </a>
                        <a className="navbar-item">
                            Sobre Nosotros
                        </a>
                        <span className="navbar-item">
                            <a className="button is-primary is-inverted">
                                <Link to='/reporte'>
                                    <strong>Quiero Reportar un animal</strong>
                                </Link>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;