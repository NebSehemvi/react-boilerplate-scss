import * as React from 'react';

import * as I from './typings';
import classes from './classes.scss';

export class Base extends React.Component<I.StoreProps & I.DispatchProps & I.Props, I.State> {
	updateStore = () => this.props.clear(0);

	renderCounter = () => {
		const { value } = this.props;

		return (
			<div
				onClick={this.updateStore}
				title="click me to clear"
				className={classes.counter}
			>
				{value}
			</div>
		);
	}

	renderControls = () => {
		const { add, add10, subtract, subtract10 } = this.props;
		return (
			<div className={classes.controls}>
				<button onClick={add}>+1</button>
				<button onClick={add10}>+10</button>
				<button onClick={subtract}>-1</button>
				<button onClick={subtract10}>-10</button>
			</div>
		);
	}

	render() {
		return (
			<div className={classes.wrapper}>
				{this.renderCounter()}
				{this.renderControls()}
			</div>
		);
	}
}