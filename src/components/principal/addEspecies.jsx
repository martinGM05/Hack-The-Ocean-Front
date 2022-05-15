import { useEffect,useState } from "react";
import axios from '../../config/axios';

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
        <form
        onSubmit={handleSubmit}
        >
            <input 
            type="text"
            onChange={handleChange}
            name='nombre' placeholder='nombre'></input>
            <input
            type="text"
            onChange={handleChange}
            name='descripcion' placeholder='descripcion'></input>
            <input
            type="text"
            onChange={handleChange}
            name='img' placeholder='img'></input>

            <input type="number"
            onChange={handleChange}
            name='problematica' placeholder='problematica'></input>


            <select 
            onChange={handleChange}
            name='estado'>
                {info.estados.map(estado => (
                    <option value={estado._id}>{estado.nombre}</option>
                ))}
            </select>

            <select
            onChange={handleChange}
            name='habitad'>
                {info.habitads.map(habitad => (
                    <option value={habitad._id}>{habitad.nombre}</option>
                ))}
            </select>

            <select
            onChange={handleChange}
            name='tipo'>
                {info.tipos.map(tipo => (
                    <option value={tipo._id}>{tipo.nombre}</option>
                ))}
            </select>

            <input type='submit'></input>


        </form>
     );
}
 
export default addEspecies;