import axios from '../../config/axios';
import {useParams} from 'react-router-dom';
import NavBar from '../../components/layouts/navbar';
import {useState,useEffect} from 'react';

const Especie = () => {

    const {id} = useParams();

    const [especie, setEspecie] = useState({});


    useEffect(() =>{

        const obtenerEspecie = async () => {
            const resultado = await axios.get(`/especie/${id}`);
            setEspecie(resultado.data);

        }
        obtenerEspecie();

        

    },[])

    return ( 
        <>
        <NavBar/>
        <div className="container mx-auto my-5">
            <div className="card">
                <span className={`is-pulled-right tag is-${especie.problematica == 3 ? 'danger' : especie.problematica == 2 ? 'warning' : 'warning is-light'}`}>
                    Problematica nivel: {especie.problematica}
                </span>
                <div 
                className="card-content">
                    <div className="media">
                        
                        <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-16by9" src={especie.img}/>
                        </figure>
                        </div>
                    <div className="media-right my-5">
                        <p
                        className="title is-4">{especie.nombre}</p>
                    </div>
                    </div>

                    <div className="content">
                    <p>{especie.descripcion}</p>

                    </div>
            </div>
            </div>

            

        </div>
        </>

     );
}
 
export default Especie;