import Card from '../layouts/card';
import { useContext, useEffect, useState } from 'react';
import { EspeciesContext } from '../../context/Especies/EspeciesProvider';


const Content = () => {

    const { especies, total, obtenerEspecies } = useContext(EspeciesContext);
    const [pagina, setPagina] = useState(1);


    useEffect(() => {
        if (pagina == 1) {
            obtenerEspecies();
        } else {
            obtenerEspecies((pagina - 1) * 6);
        }

    }, [pagina])

    if (!especies.length) {
        return <p className="has-text-centered">No se encontraron especies</p>
    }

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
                {
                    pagina != 1 ?
                        <button
                            onClick={() => setPagina(pagina - 1)}
                            className="pagination-previous">Anterior</button>
                        : null
                }

                {
                    pagina * 6 < total ?
                        <button
                            onClick={() => setPagina(pagina + 1)}
                            className="pagination-next">Siguiente</button>
                        : null

                }
            </nav>

        </>
    );
}

export default Content;