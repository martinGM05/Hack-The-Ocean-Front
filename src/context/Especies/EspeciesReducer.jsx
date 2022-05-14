import { OBTENER_ESPECIES } from '../types'

export default (state, action) => {
    switch(action.type) {
        case OBTENER_ESPECIES:
            return {
                ...state,
            }
        default:
            return state;
    }
}

