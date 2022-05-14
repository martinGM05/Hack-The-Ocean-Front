import { useContext, useEffect, useState } from 'react';
import { EspeciesContext } from '../../context/Especies/EspeciesProvider';


const Buscador = ({ setModal }) => {

    const {
        estados, totalEspecies, obtenerEstados,
        tipos, totalTipos, obtenerTipos,
        habitats, totalHabitats, obtenerHabitats,
    } = useContext(EspeciesContext);

    const [pagina, setPagina] = useState(1);
    const [opcion, setOpcion] = useState('Todos');
    const [tipoLista, setTipoLista] = useState([]);

    useEffect(() => {
        obtenerEstados();
        obtenerTipos();
        obtenerHabitats();
    }, [])

    const handleSelect = (e) => {
        if (e.target.value === 'Todos') {
            setTipoLista([])
        } else if (e.target.value === 'Estado') {
            setTipoLista(estados);
        } else if (e.target.value === 'Tipo') {
            setTipoLista(tipos);
        } else if (e.target.value === 'Habitat') {
            setTipoLista(habitats);
        }
    }



    return (
        <div className="container mx-auto columns is-multiline box ">
            <div className="column is-flex is-flex-direction-row">
                <div className="select is-primary mx-2">
                    <select onChange={handleSelect}>
                        <option value="Todos">Todos</option>
                        <option value="Estado">Estado</option>
                        <option value="Tipo">Tipo</option>
                        <option value="Habitat">Habitat</option>
                    </select>
                </div>
                {
                    tipoLista.length > 0 && (
                        <div className="select is-primary mx-2">
                            <select>
                                {
                                    tipoLista.map(estado => (
                                        <option key={estado._id} value={estado.nombre}>{estado.nombre}</option>
                                    ))
                                }
                            </select>
                        </div>
                    )
                }
            </div>
            <div className="field has-addons mx-2 my-2">
                <div className="control">
                    <input className="input" type="text" placeholder="Buscar..." />
                </div>
                <div className="control">
                    <button className="button is-primary"
                        onClick={() => setModal(true)}
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Buscador;