import { all } from 'redux-saga/effects'

import featureSaga from '../../features/sagas';

interface ReturnValue {
	_result: 'success' | 'error';
	[index: string]: any;
}

export type sagaReturnCB = (returnValue: ReturnValue) => void

export function* rootSaga() {
	yield all([
		...featureSaga,
	]);
}