import { call, put } from 'redux-saga/effects';
import { updateItemsAction } from './actions';
import { getItemsList } from './api';
import { requestStatus } from '../../constants/requestStatus';

export function* fetchItemsList(action) {
    try {
        yield put(
            updateItemsAction({
                itemsStatus: requestStatus.LOADING,
            }),
        );

        const res = yield call(getItemsList);
        yield put(
            updateItemsAction({
                items: res.data,
                itemsStatus: requestStatus.LOADED,
            }),
        );
    } catch (error) {
        const errorMessage = 'Something went wrong';

        yield put(
            updateItemsAction({
                itemsError: errorMessage,
                itemsStatus: requestStatus.ERROR,
            }),
        );
    }
}
