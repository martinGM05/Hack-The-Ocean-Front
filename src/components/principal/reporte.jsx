const Reporte = () => {
    return ( 
        <>
        <form className='box container mx-auto my-2'>
            <h1 className='title has-text-centered'>Genera un reporte</h1>
            <div className="field">
                <label className="label">Título</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Título"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Descripción</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Descripción"></textarea>
                </div>
            </div>

            <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="ejemplo@server.com" />
            </div>
            </div>

            <div className="field">
                <label className="label">Ubicación</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Ubicación"/>
                </div>
            </div>

            <div className="field is-grouped is-justify-content-flex-end">
                <div className="control">
                    <div className="select">
                    <select>
                        <option>Selecciona el Estado</option>
                        <option>Opción</option>
                    </select>
                    </div>
                </div>
                <div className="control pull-">
                <input type='submit' className="button is-link" value='Enviar Reporte'/>
            </div>
            </div>

            
        </form>
        </>
     );
}
 
export default Reporte;