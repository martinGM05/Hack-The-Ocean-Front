import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar mb-2 is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ">
            <Link to='/' className="navbar-item" href="#">
            Protegiendo especies
            </Link>
        </div>

            <div class="navbar-end">
                <div class="buttons mx-2">
                <Link to='/reporte' className='button is-danger'>
                    <strong>Quiero Reportar un animal</strong>
                </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;