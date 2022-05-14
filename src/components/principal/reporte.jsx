const Reporte = () => {
    return ( 
        <>
            <div class="field">
                <label class="label">Título</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Título"/>
                </div>
            </div>

            <div class="field">
                <label class="label">Descripción</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Descripción"></textarea>
                </div>
            </div>

            <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="ejemplo@server.com" />
            </div>
            </div>

            <div class="field">
                <label class="label">Ubicación</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Ubicación"/>
                </div>
            </div>

            <div class="field">
                <label class="label">Estado</label>
                <div class="control">
                    <div class="select">
                    <select>
                        <option>Selecciona el Estado</option>
                        <option>Opción</option>
                    </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="checkbox">
                    <input type="checkbox"/>
                    Finalizado
                    </label>
                </div>
            </div>

            <div class="control">
                <button class="button is-link">Enviar reporte</button>
            </div>
        </>
     );
}
 
export default Reporte;