export function createAction<T extends string>(type: T): { type: T }
export function createAction<T extends string, P>(type: T, payload: P): { type: T, payload: P }
export function createAction<T extends string, P>(type: T, payload?: P) {
	return payload === undefined ? { type } : { type, payload };
}

interface IBase {
	value: number;
}

export interface IStore {
	base: IBase;
}

export const initialState: IStore = {
	base: {
		value: 1,
	}
}