import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand ">
            <a class="navbar-item" href="#">
            Salvemos Especies En Peligro
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarID" class="navbar-menu">
            

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
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