import { all, takeEvery } from 'redux-saga/effects';
import * as itemsActionTypes from './items/actionTypes';
import { fetchItemsList } from './items/saga';

export default function* root() {
    yield all([
        //items
        takeEvery(itemsActionTypes.GET_ITEMS_LIST, fetchItemsList),
    ]);
}
