import { SET_ACTIVE_MENU_ITEM } from "../../actions/AppActions/appActions";

const initialState = {
    activeMenuItem: null,
}

export const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_ACTIVE_MENU_ITEM:
            return {...state, activeMenuItem: payload};
        default:
            return state;
    }
}