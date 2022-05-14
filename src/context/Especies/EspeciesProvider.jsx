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


    const obtenerEspecies = async (desde=0,limite=6) => {
        try {
            const resultado = await axios.get(`/especie?desde=${desde}&limite=${limite}`);
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

    return (
        <EspeciesContext.Provider
            value={{
                total: state.total,
                especies: state.especies,
                obtenerEspecies
            }}
        >
            {children}
        </EspeciesContext.Provider>
    )

}

export default EspeciesProvider;