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
                            Se parte de nosotros
                        </p>
                        <p className="subtitle">
                            Solo necesitas una cuenta para poder reportar un animal
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Introduccion;