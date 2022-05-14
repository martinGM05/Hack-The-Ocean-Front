
const Buscador = ({setModal}) => {


    return (
        <div className="container mx-auto columns is-multiline box">
            <div className="column is-flex is-flex-direction-row">
                <div className="select is-primary mx-2">
                    <select>
                        <option>Todos</option>
                        <option>Estado</option>
                        <option>Tipo</option>
                        <option>Habitat</option>
                    </select>
                </div>
                <div className="select is-primary mx-2">
                    <select>                        
                        <option selected>Todos</option>
                    </select>
                </div>
            </div>
            <div className="field has-addons mx-2 my-2">
                <div className="control">
                <input className="input" type="text" placeholder="Buscar..."/>
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