import { useState, useEffect, useReducer, createContext } from "react";
import EspeciesReducer from "./EspeciesReducer";
import axios from '../../config/axios';

export const EspeciesContext = createContext();

const EspeciesProvider = ({ children }) => {

    const initalState = {
        especies: [],
        total: 0
    }


    const [state, dispatch] = useReducer(EspeciesReducer, initalState)
    const [stateEstados, setStateEstados] = useReducer(EspeciesReducer, initalState)
    const [stateTipos, setStateTipos] = useReducer(EspeciesReducer, initalState)
    const [stateHabitats, setStateHabitats] = useReducer(EspeciesReducer, initalState)
    

    const obtenerEspecies = async (desde=0,limite=6) => {

        console.log(desde)
        console.log(limite);

        try {
            const url = `/especie?desde=${desde}&limite=${limite}`
            console.log(url)
            const resultado = await axios.get(url);

            dispatch({
                type: "OBTENER_ESPECIES",
                payload: {
                    total: resultado.data.total,
                    especies: resultado.data.especies
                }
            })

        } catch (error) {
            console.log(error);
        }
    }

    const filtrarEspecies = async (estadoParam, habitadParam, tipo) => {
        try {
            if(habitadParam != ''){
                const { data } = await axios.get(`especie?desde=0&limite=5&habitad=${habitadParam}`);
                dispatch({
                    type: "FILTRAR_ESPECIES",
                    payload: {
                        especies: data.especies,
                        total: data.total
                    }
                })
            }else if(tipo != ''){
                const { data } = await axios.get(`especie?desde=0&limite=5&tipo=${tipo}`);
                dispatch({
                    type: "FILTRAR_ESPECIES",
                    payload: {
                        especies: data.especies,
                        total: data.total
                    }
                })
            }else if(estadoParam != ''){
                const { data } = await axios.get(`especie?desde=0&limite=5&estado=${estadoParam}`);
                dispatch({
                    type: "FILTRAR_ESPECIES",
                    payload: {
                        especies: data.especies,
                        total: data.total
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerEstados = async (desde=0, limite=6) => {
        try {
            const resultado = await axios.get(`/estado?desde=${desde}&limite=${limite}`);
            setStateEstados({
                type: "OBTENER_ESTADOS",
                payload: {
                    total: resultado.data.total,
                    estados: resultado.data.estados
                }
            })

        } catch (error) {
            console.log(error);
        }
    }

    const obtenerTipos = async (desde=0, limite=6) => {
        try {
            const resultado = await axios.get(`/tipos?desde=${desde}&limite=${limite}`);
            setStateTipos({
                type: "OBTENER_TIPOS",
                payload: {
                    total: resultado.data.total,
                    tipos: resultado.data.tipos
                }
            })

        } catch (error) {
            console.log(error);
        }
    }

    const obtenerHabitats = async (desde=0, limite=6) => {
        try {
            const resultado = await axios.get(`/habitad?desde=${desde}&limite=${limite}`);
            setStateHabitats({
                type: "OBTENER_HABITATS",
                payload: {
                    total: resultado.data.total,
                    habitats: resultado.data.habitads
                }
            })

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <EspeciesContext.Provider
            value={{
                total: state.total,
                especies: state.especies,
                obtenerEspecies,
                obtenerEstados,
                estados: stateEstados.estados,
                totalEspecies: stateEstados.total,
                obtenerTipos,
                tipos: stateTipos.tipos,
                totalTipos: stateTipos.total,
                obtenerHabitats,
                habitats: stateHabitats.habitats,
                totalHabitats: stateHabitats.total,
                filtrarEspecies
            }}
        >
            {children}
        </EspeciesContext.Provider>
    )

}

export default EspeciesProvider;