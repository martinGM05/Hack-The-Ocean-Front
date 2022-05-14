import Card from '../layouts/card';
import {useContext, useEffect, useState} from 'react';
import {EspeciesContext} from '../../context/Especies/EspeciesProvider';


const Content = () => {

    const {especies,total, obtenerEspecies} = useContext(EspeciesContext);
    const [pagina,setPagina] = useState(1);

    useEffect(() => {
        obtenerEspecies();
    }, [])

    return ( 
        <>
        <div className='container mx-auto my-2 columns is-multiline is-mobile'>
            {
                especies.map(animal => (
                    <div className='column is-one-third-desktop'>
                        <Card
                            key={animal._id}
                            data={animal}
                        />
                    </div>
                ))
            }
            
        </div>

        <nav className="container mx-auto my-5 pagination is-centered" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Anterior</a>
            <a className="pagination-next">Siguiente</a>
        </nav>

        </>
     );
}
 
export default Content;