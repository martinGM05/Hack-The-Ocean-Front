import { useContext, useEffect, useState } from 'react';
import { EspeciesContext } from '../../context/Especies/EspeciesProvider';
import { ToastContainer,toast } from 'react-toastify';


const Buscador = ({ setModal }) => {

    const notify = (msg,type) => toast(msg,{
        type: type,
        autoClose: 2000
    })

    const {
        obtenerEspecies,
        estados, obtenerEstados,
        tipos, obtenerTipos,
        habitats, obtenerHabitats,
        filtrarEspecies, buscador
    } = useContext(EspeciesContext);

    const [pagina, setPagina] = useState(1);
    const [tipoLista, setTipoLista] = useState([]);
    const [opt, setOpt] = useState('');
    const [search, setSearch] = useState('');



    useEffect(() => {
        obtenerEstados();
        obtenerTipos();
        obtenerHabitats();
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleSubtmit = () => {
        console.log('buscando');
        if (search === '') {
            notify('Debe ingresar una especie','error');
            return;
        }
        buscador(search);
    }

    const handleSelect = (e) => {
        if (e.target.value === 'Todos') {
            setTipoLista([])
            obtenerEspecies();
        } else if (e.target.value === 'Estado') {
            setTipoLista(estados);
            setOpt('estado');
        } else if (e.target.value === 'Tipo') {
            setTipoLista(tipos);
            setOpt('tipo');
        } else if (e.target.value === 'Habitat') {
            setTipoLista(habitats);
            setOpt('habitat');
        }
    }

    const handleFiltrar = (e) => {
        if(opt === 'estado'){
            filtrarEspecies(e.target.value, '', '');
        }else if(opt === 'habitat'){
            filtrarEspecies('', e.target.value, '');
        }else if(opt === 'tipo'){
            filtrarEspecies('', '', e.target.value);
        }
    }


    return (
        
        <div className="container mx-auto columns is-multiline box ">
            <ToastContainer/>
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
                            <select onChange={(e) => handleFiltrar(e)}>
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
                    <input 
                        onChange={handleSearch}
                    className="input" type="text" placeholder="Buscar..." />
                </div>
                <div className="control">
                    <button
                        onClick={handleSubtmit}
                    type='button' className="button is-primary">
                        Buscar
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Buscador;