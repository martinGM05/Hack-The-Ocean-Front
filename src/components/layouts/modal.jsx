const Modal = ({ closeModal }) => {
    return (
        <>
            <p>Modal</p>
            <div className="modalBackground">
                <div className="modalContainer">
                    <button
                        onClick={() => closeModal(false)}
                    >X</button>
                    <div className="title">
                        <h1>Titulo</h1>
                    </div>
                    <div className="body">
                        <h1>Contenido</h1>
                    </div>
                    <div className="footer">
                        <button>Aceptar</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;