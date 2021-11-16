import {TOGGLE_LOADING_APP} from '../../actions/AppActions/appActions'
const initialState = {
    loading: false,
}

export const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_LOADING_APP:
            return {...state, loading: !state.loading};
        default:
            return state;
    }
}