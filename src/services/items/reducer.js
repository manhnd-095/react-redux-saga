import * as actionTypes from './actionTypes';
import { requestStatus } from '../../constants/requestStatus';

const initialState = {
    items: [],
    itemsStatus: requestStatus.NOT_LOADED,
    itemsError: undefined,
};

const items = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export default items;
