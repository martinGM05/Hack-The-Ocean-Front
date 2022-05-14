
const Modal = ({ closeModal, nombre, image, description }) => {
    return (
        <div>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{nombre}</p>
                    <button className="delete" aria-label="close"
                        onClick={() => closeModal(false)}
                    >X</button>
                </header>
                <section className="modal-card-body">
                    <div className="columns is-multiline">
                        <p className="column is-flex">
                            <img src={image} alt={nombre} />
                            <div className="column is-flex is-flex-direction-row">
                                <p className="is-flex"> 
                                    {description}
                                </p>
                            </div>
                        </p>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button"
                        onClick={() => closeModal(false)}
                    >Salir</button>
                </footer>
            </div>
        </div>
    );
}

export default Modal;