import { put, takeLatest } from "redux-saga/effects";

import { createAction } from "../../../common/store";


export enum ActionTypes {
	TRIGGER_CLEAR = 'action.TRIGGER_CLEAR',
	CLEAR = 'action.CLEAR',
	ADD = 'action.ADD',
	ADD10 = 'action.ADD10',
	SUBTRACT = 'action.SUBTRACT',
	SUBTRACT10 = 'action.SUBTRACT10',
}

export function triggerClear(value: number) {
	return createAction(ActionTypes.TRIGGER_CLEAR, value);
}

export function clear(value: number) {
	return createAction(ActionTypes.CLEAR, value);
}

export function add() {
	return createAction(ActionTypes.ADD);
}

export function subtract() {
	return createAction(ActionTypes.SUBTRACT);
}

export function add10() {
	return createAction(ActionTypes.ADD10);
}
export function subtract10() {
	return createAction(ActionTypes.SUBTRACT10);
}

/**
 * Only those actions (from actionCreators) that affect store
 */
export type Actions = 
	ReturnType<typeof clear> |
	ReturnType<typeof add> |
	ReturnType<typeof add10> |
	ReturnType<typeof subtract> |
	ReturnType<typeof subtract10>;

function* _clear(action: ReturnType<typeof triggerClear>) {
	const { payload } = action;

	// here you can do some side effects (like async http request)
	// also you can do something with payload before store update

	yield put(clear(payload));
}

function* baseSaga() {
	yield takeLatest(ActionTypes.TRIGGER_CLEAR, _clear);
}

export {
	baseSaga,
	ActionTypes as GameActionTypes,
}