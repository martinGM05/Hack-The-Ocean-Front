import './Intro.css'
import BG from './bg.jpg';

const Introduccion = () => {
    return (
        <div className="hero">
            <img className='img-full ' src={BG} alt='background'/> 
        </div>
    );
}
 
export default Introduccion;