import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://hacktheocean.herokuapp.com/api/'
})

export default clienteAxios;