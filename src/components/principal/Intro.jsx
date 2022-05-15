import NavBar from '../layouts/navbar'

const Introduccion = () => {
    return (
        <>
             <div className='pb-0'>
                <section className="hero is-primary is-medium">
                    <div className="hero-head">
                        <NavBar />
                    </div>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title">
                                Title
                            </p>
                            <p className="subtitle">
                                Subtitle
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Introduccion;