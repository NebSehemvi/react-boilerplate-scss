import { initialState, IStore } from "common/store";
import { ActionTypes, Actions } from "./sagas";

const base = (state = initialState.base, action: Actions): IStore['base'] => {
	switch (action.type) {
		case ActionTypes.CLEAR:
			return {
				...state,
				value: action.payload,
			};
		case ActionTypes.ADD:
			return {
				...state,
				value: state.value + 1,
			}
		case ActionTypes.ADD10:
			return {
				...state,
				value: state.value + 10,
			}
		case ActionTypes.SUBTRACT:
			return {
				...state,
				value: state.value - 1,
			}
		case ActionTypes.SUBTRACT10:
			return {
				...state,
				value: state.value - 10,
			}
		default:
			return state;
	}
}

export default base;