import axios from "axios";
import { useState, useEffect, useReducer, createContext } from "react";
import EspeciesReducer from "./EspeciesReducer";

const EspeciesContext = createContext();

const EspeciesProvider = ({ children }) => {

    const [stateEspecies, dispatch] = useReducer(EspeciesReducer, [])


    const obtenerEspecies = async () => {
        const url = "";
        const resultado = await axios.get(url);
        dispatch({
            type: "OBTENER_ESPECIES",
            payload: resultado.data.especies
        });
    }

    return (
        <EspeciesContext.Provider
            value={{
                stateEspecies
            }}
        >
            {children}
        </EspeciesContext.Provider>
    )

}

export default EspeciesProvider;