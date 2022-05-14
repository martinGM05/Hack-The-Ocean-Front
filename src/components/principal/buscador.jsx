
const Buscador = () => {
    return (
        <div class="columns is-multiline box">
            <div class="column is-flex is-flex-direction-row">
                <div class="select is-primary">
                    <select>
                        <option>Especie</option>
                        <option>Estado</option>
                        <option>Tipo</option>
                        <option>Habitat</option>
                    </select>
                </div>
            </div>
            <div class="column is-flex">
                    <input class="input" type="text" placeholder="" />
                    <button class="button is-dark">Buscar</button>
            </div>
        </div>
    );
}

export default Buscador;