import Navbar from '../layouts/navbar'
import Footer from '../footer/footer';
import {useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer} from 'react-toastify';
import axios from '../../config/axios';

const Reporte = () => {

    const notify = (msg,type) => toast(msg,{
        type,
        autoClose: 2000,
    });

    const [estados, setEstados] = useState([]);

    const [form, setForm] = useState({
        titulo:'',
        descripcion:'',
        email:'',
        ubicacion:'',
        estado: ''});
    
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        const {titulo,descripcion,email,ubicacion,estado} = form;
        e.preventDefault();
        if(titulo.trim() === '' || descripcion.trim() === '' || email.trim() === '' || ubicacion.trim() === '' || estado.trim() === ''){
            notify('Todos los campos son obligatorios','error');
        }else{
            axios.post('/reportes',{titulo,descripcion,email,ubicacion,estado})
            notify('Reporte enviado','success');
            setForm({
                titulo:'',
                descripcion:'',
                email:'',
                ubicacion:'',
                estado: ''});
            e.target.reset();
        }
    
    }

    useEffect(() => {
        const getEstados = async () => {
            try {
                const resultado = await axios.get('/estado');
                setEstados(resultado.data.estados);
            } catch (error) {
                console.log(error.response);
            }
        }
        getEstados();
    }, [])

    return ( 
        <>
        <Navbar/>
        <ToastContainer/>
        <form 
            onSubmit={handleSubmit}
        className='box container mx-auto my-2'>
            <h1 className='title has-text-centered'>Genera un reporte</h1>
            <div className="field">
                <label className="label">Título</label>
                <div className="control">
                    <input
                        onChange={handleChange}
                    name='titulo' className="input" type="text" placeholder="Título"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Descripción</label>
                <div className="control">
                    <textarea 
                        onChange={handleChange}
                    name='descripcion' className="textarea" placeholder="Descripción"></textarea>
                </div>
            </div>

            <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input 
                    onChange={handleChange}
                name='email' className="input" type="email" placeholder="ejemplo@server.com" />
            </div>
            </div>

            <div className="field">
                <label className="label">Ubicación</label>
                <div className="control">
                    <input 
                        onChange={handleChange}
                    name='ubicacion' className="input" type="text" placeholder="Ubicación"/>
                </div>
            </div>

            <div className="field is-grouped is-justify-content-flex-end">
                <div className="control">
                    <div className="select">
                    <select
                        onChange={handleChange}
                        name='estado'
                    >
                        <option selected disabled>Selecciona el Estado</option>
                        {
                            estados.map(estado => (
                                <option key={estado._id} value={estado._id}>{estado.nombre}</option>
                            ))
                        }
                    </select>
                    </div>
                </div>
                <div className="control pull-">
                <input type='submit' className="button is-primary" value='Enviar Reporte'/>
            </div>
            </div>

            
        </form>
        <Footer/>
        </>
     );
}
 
export default Reporte;