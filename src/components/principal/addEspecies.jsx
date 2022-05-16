import { useEffect,useState } from "react";
import axios from '../../config/axios';
import NavBar from '../layouts/navbar';

const addEspecies = () => {

    const [info,setInfo] = useState({
        estados: [],
        tipos: [],
        habitads: [],
    })

    const [especie,setEspecie] = useState({
        nombre: '',
        descripcion: '',
        img: '',
        problematica: '',
        estado: '',
        tipo: '',
        habitad: '',
    })

    const handleChange = (e) => {
        setEspecie({
            ...especie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {nombre,descripcion,img,problematica,estado,tipo,habitad} = especie;
        if(nombre === '' || descripcion === '' || img === '' || problematica === '' || estado === '' || tipo === '' || habitad === ''){
            alert('Todos los campos son obligatorios');
            return;
        }
        const resultado = await axios.post('/especie',{nombre,descripcion,img,problematica,estado,tipo,habitad});
        console.log(resultado);
        setEspecie({
            nombre: '',
            descripcion: '',
            img: '',
            problematica: '',
            estado: '',
            tipo: '',
            habitad: '',
        })
        alert('Especie agregada');
        e.target.reset();
    }
    
    useEffect(() => {

        const obtenerInfo = async () => {
            const [estado,habitad,tipo] = await Promise.all([
                axios.get('/estado?desde=0&limite=1000'),
                axios.get('/habitad?desde=0&limite=1000'),
                axios.get('/tipos?desde=0&limite=1000')
            ])
            setInfo({
                estados: estado.data.estados,
                habitads: habitad.data.habitads,
                tipos: tipo.data.tipos
        })
    }

    obtenerInfo();
            
    } ,[])


    return ( 
        <>
        <NavBar/>
       
        <form
        onSubmit={handleSubmit}
        className='container mx-auto box my-5'
        >
            <div class="notification is-primary">
                Ayuda a Launch X para que puedas agregar especies que se encuentren en peligro de extincion y asi poder ayudar a los cientificos a prevenir la extincion de especies y generar conciencia.
            </div>
            <div class="field">
                <label class="label">Nombre</label>
                <div class="control">
                <input 
                class="input"
                    type="text"
                    onChange={handleChange}
                    name='nombre' placeholder='nombre'>
                </input>
                </div>
            </div>

            <div className="field">
                <label className="label">Descripción</label>
                <div className="control"/>
                <input
                    className='input'
                    type="text"
                    onChange={handleChange}
                    name='descripcion' placeholder='descripcion'></input>
            </div>

            <div className='field'>
                <label className='label'>Imagen</label>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        onChange={handleChange}
                        name='img' placeholder='img'></input>
                </div>
            </div>
            
            <div className="field">
                <label className="label">Problemática</label>
                <div className="control">
                    <input
                        className='input'
                        type="number"
                        onChange={handleChange}
                        name='problematica' placeholder='problematica'></input>
                </div>
            </div>

            <div className='field is-grouped is-justify-content-flex-end'>
            <div className="control">
                <div className="select">
                    <select 
                        onChange={handleChange}
                        name='estado'>
                            {info.estados.map(estado => (
                                <option value={estado._id}>{estado.nombre}</option>
                            ))}
                    </select>
                </div>
            </div>

            <div className="control">
                <div className="select">
                    <select
                        onChange={handleChange}
                        name='habitad'>
                            {info.habitads.map(habitad => (
                                <option value={habitad._id}>{habitad.nombre}</option>
                            ))}
                    </select>
                </div>
            </div>

            <div class="control">
                <div class="select">
                    <select
                        onChange={handleChange}
                        name='tipo'>
                            {info.tipos.map(tipo => (
                                <option value={tipo._id}>{tipo.nombre}</option>
                            ))}
                    </select>
                </div>
            </div>
            <input className='button is-primary is-pulled-right' type='submit'></input>
            </div>    

            


        </form>
        </>
     );
}
 
export default addEspecies;