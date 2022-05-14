export default (state, action) => {
    switch(action.type) {
        case 'OBTENER_ESPECIES':
            return {
                ...state,
                especies: action.payload.especies,
                total: action.payload.total
            }
        
        default:
            return state;
    }
}

