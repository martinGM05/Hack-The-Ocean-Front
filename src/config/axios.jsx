import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://hacktheoceanback.azurewebsites.net/api/',

    // baseURL: 'http://localhost:4000/api/'
})

export default clienteAxios;