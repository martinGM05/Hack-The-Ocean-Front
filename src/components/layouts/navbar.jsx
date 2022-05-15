import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    return (
        <nav className="hero is-primary is-medium navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link to='/' href="#">
                        <a className="navbar-item title is-8">
                            Woopas al rescate
                        </a>
                    </Link>
                    <span className="navbar-burger" data-target="navbarMenuHeroA">
                        <span>
                        </span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <Link to={'/add'} className={`navbar-item ${location.pathname === '/add' ? 'is-active' : ''}`}>
                            Agregar Especie
                        </Link>
                        <span className={`navbar-item ${location.pathname === '/reporte' ? 'is-active' : ''}`} href="/contacto">
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