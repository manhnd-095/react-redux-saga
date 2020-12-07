import * as actionTypes from './actionTypes';

export function getItemsListAction() {
    return { type: actionTypes.GET_ITEMS_LIST };
}

export function updateItemsAction(payload) {
    return { type: actionTypes.UPDATE, payload };
}
