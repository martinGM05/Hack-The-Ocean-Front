export default (state, action) => {
    switch(action.type) {
        case 'OBTENER_ESPECIES':
            return {
                ...state,
                especies: action.payload.especies,
                total: action.payload.total
            }

        case 'OBTENER_ESTADOS':
            return {
                ...state,
                estados: action.payload.estados,
                total: action.payload.total
            }
        case 'OBTENER_TIPOS':
            return {
                ...state,
                tipos: action.payload.tipos,
                total: action.payload.total
            }
        case 'OBTENER_HABITATS':
            return {
                ...state,
                habitats: action.payload.habitats,
                total: action.payload.total
            }
        default:
            return state;
    }
}

