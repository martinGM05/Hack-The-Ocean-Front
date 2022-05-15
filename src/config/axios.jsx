import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://hacktheocean.herokuapp.com/api/'
    // baseURL: 'http://localhost:4000/api/'
})

export default clienteAxios;