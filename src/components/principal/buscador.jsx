import { useState } from 'react';
import Modal from '../layouts/modal';

const Buscador = () => {

    const [modal, setModal] = useState(false);

    return (
        <>
            <div className="columns is-multiline box">
                <div className="column is-flex is-flex-direction-row">
                    <div className="select is-primary">
                        <select>
                            <option>Especie</option>
                            <option>Estado</option>
                            <option>Tipo</option>
                            <option>Habitat</option>
                        </select>
                    </div>
                </div>
                <div className="column is-flex">
                    <input className="input" type="text" placeholder="" />
                    <button className="button is-dark"
                        onClick={() => setModal(true)}
                    >Buscar</button>
                </div>
            </div>

            {modal &&
                <Modal
                    closeModal={setModal}
                    nombre={'Ajolote'}
                    image={'https://bulma.io/images/placeholders/128x128.png'}
                    description={'Irure deserunt occaecat enim dolore quis. Qui do irure excepteur quis aliquip laborum velit commodo cupidatat eu qui eiusmod enim.'}
                />
            }
        </>
    );
}

export default Buscador;