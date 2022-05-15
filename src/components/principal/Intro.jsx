import NavBar from '../layouts/navbar'

const Introduccion = () => {
    return (
        <>
            <section className="hero is-primary is-medium">
                <div className="hero-head">
                    <NavBar />
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title">
                            Launch X - Salvando al Ocenado
                        </p>
                        <p className="subtitle">
                            Una aplicación para ayudar a los animales que están en peligro de extinción
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Introduccion;