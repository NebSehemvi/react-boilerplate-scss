import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IStore } from "common/store";
import { Base } from "./Base";
import { 
	triggerClear,
	add,
	add10,
	subtract,
	subtract10,
} from "./store/sagas";

import * as I from './typings';

const gameContainer = {
	mapStateToProps: ({ base }: IStore): I.StoreProps => ({
		value: base.value,
	}),
	mapDispatchToProps: (dispatch: Dispatch): I.DispatchProps => ({
		clear: (value: number) => dispatch(triggerClear(value)),
		add: () => dispatch(add()),
		add10: () => dispatch(add10()),
		subtract: () => dispatch(subtract()),
		subtract10: () => dispatch(subtract10()),
	}),
};

export default connect(
	gameContainer.mapStateToProps,
	gameContainer.mapDispatchToProps
)(Base);
