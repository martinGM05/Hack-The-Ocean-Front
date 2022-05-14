import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ">
            <a className="navbar-item" href="#">
            Salvemos Especies En Peligro
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarID" className="navbar-menu">
            

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                <Link to='/reporte' className='button is-danger'>
                    <strong>Quiero Reportar un animal</strong>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </nav>
    )
}
export default Navbar;