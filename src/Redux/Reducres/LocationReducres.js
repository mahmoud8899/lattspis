import * as Types from '../Action/Types'


const MapsState = {
    error: null,
    location: {}
}

export const SetLocationResdurees = (state = MapsState, action) => {

    switch (action.type) {
        case Types.SET_LOCATION: return {
            ...state,
            location: action.payload
        }

        case Types.SET_LOCATION_FAIL: return {
            ...state,
            error: action.payload
        }


        default: return state
    }
}